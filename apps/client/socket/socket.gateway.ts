import { SOCKET_EVENT } from './socket.events';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { throws } from 'assert';
import { SetOfQuestionsService } from '../set-of-questions/services/setOfQuestions.service';
import e from 'cors';
import { QuestionService } from '../question/services/question.service';
import { UserHostSocketService } from './services/userHostSocket.service';
import { UserScoreQuizSocketService } from './services/userScoreQuizSocket.service';
import { UserMemberSocketService } from './services/userSocket.service';
import { RandomFunc } from 'apps/share/helpers/random';
import { WsJwtGuard } from './socket.wsJwtGuard';

@WebSocketGateway({ cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // private _redisSocket: Record<
  //   string,
  //   {
  //     idRoom: string;
  //     host: string;
  //     users: Array<string>;
  //     questions: Array<string>;
  //     currentQuestion: number;
  //   }
  // >;

  constructor(
    private readonly _questionService: QuestionService,
    private readonly _userHostSocketService: UserHostSocketService,
    private readonly _userScoreQuizSocketService: UserScoreQuizSocketService,
    private readonly _userMemberSocketService: UserMemberSocketService,
    private readonly _setOfQuestionsService: SetOfQuestionsService,
  ) {
    // this._redisSocket = {};
  }

  @WebSocketServer() private server: Server;
  private logger: Logger = new Logger('AppGateway');

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('acb')
  private async handleCreate1Room(client: Socket, payload): Promise<void> {
    console.log(client.id);
    this.server.emit('abc', {
      msg: 'Create Room Quiz Success',
      idRoom: client.id,
    });
  }

  @SubscribeMessage(SOCKET_EVENT.CREATE_QUIZ_CSS)
  private async handleCreateRoom(
    client: Socket,
    payload: { idSetOfQuestions: string },
  ): Promise<void> {
    const idRoom = RandomFunc();
    client.join(idRoom);
    console.log(client.id);
    const questions = await this._questionService.findAll({
      idSetOfQuestions: payload.idSetOfQuestions,
    });

    const mapIdQuestions = questions.map((e) => e._id);

    const userHostSocket =
      await this._userHostSocketService.createUserHostSocket({
        idRoom: idRoom,
        host: client.id,
        questions: mapIdQuestions,
      });
    if (userHostSocket) {
      this.server.emit(SOCKET_EVENT.CREATE_QUIZ_SSC, {
        msg: 'Create Room Quiz Success',
        idRoom: idRoom,
      });
    } else {
      this.server.emit(SOCKET_EVENT.CREATE_QUIZ_SSC, {
        msg: 'Create Room Quiz Fail',
        idRoom: null,
      });
    }
  }

  @SubscribeMessage(SOCKET_EVENT.JOIN_ROOM_CSS)
  private async handleJoinRoom(
    client: Socket,
    payload: { idRoom: string },
  ): Promise<void> {
    client.join(payload.idRoom);
    console.log(client.id);

    // createMemberSocket
    const newMember = await this._userMemberSocketService.createMemberSocket({
      idRoom: payload.idRoom,
      userId: client.id,
    });

    if (newMember) {
      this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
        msg: 'Join Room Quiz Success',
        user: newMember,
      });
      return;
    }
    this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
      msg: 'Join Room Quiz False',
      user: null,
    });
    return;
  }

  @SubscribeMessage(SOCKET_EVENT.START_QUIZ_CSS)
  private async handleStartQuiz(
    client: Socket,
    payload: { idRoom: string },
  ): Promise<void> {
    const host = await this._userHostSocketService.findOne({
      idRoom: payload.idRoom,
      host: client.id,
    });
    if (host) {
      const startGame = await this._userHostSocketService.findOneAndUpdate(
        { _id: host._id },
        { play: true },
      );
      if (startGame) {
        client.broadcast.to(host.idRoom).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
          msg: 'Start Game Success',
          data: startGame,
        });
      }
      client.broadcast.to(host.idRoom).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
        msg: 'Fail Game Success',
        data: startGame,
      });
    }
    this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
      msg: 'Dont find host start game',
      data: null,
    });
  }

  @SubscribeMessage(SOCKET_EVENT.LEAVE_ROOM_CSS)
  private handleLeaveRoom(client: Socket, payload: { idRoom: string }): void {
    this.server.emit(SOCKET_EVENT.LEAVE_ROOM_SSC, payload);
  }

  //Thong ke sau khi tra loi cau hoi
  private handleStatistQuiz(client: Socket, payload: { idRoom: string }): void {
    this.server.emit(SOCKET_EVENT.STATISTICAL_ROOM_SSC, payload);
  }

  //Dap An cau hoi
  @SubscribeMessage(SOCKET_EVENT.ANSWER_THE_QUESTION_CSS)
  private handleAnswerTheQuestion(
    client: Socket,
    payload: { idRoom: string },
  ): void {
    this.server.emit(SOCKET_EVENT.ANSWER_THE_QUESTION_SSC, payload);
  }

  //get cau hoi
  @SubscribeMessage(SOCKET_EVENT.TAKE_THE_QUESTION_CSS)
  private handleTakeTheQuestion(
    client: Socket,
    payload: { idRoom: string },
  ): void {
    this.server.emit(SOCKET_EVENT.TAKE_THE_QUESTION_SSC, payload);
  }
  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
