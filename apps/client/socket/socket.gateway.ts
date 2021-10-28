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
import { SetOfQuestionsService } from '../set-of-questions/services/setOfQuestions.service';
import cors from 'cors';
import { QuestionService } from '../question/services/question.service';
import { UserHostSocketService } from './services/userHostSocket.service';
import { UserScoreQuizSocketService } from './services/userScoreQuizSocket.service';
import { UserMemberSocketService } from './services/userSocket.service';
import { RandomFunc } from 'apps/share/helpers/random';
import { WsJwtGuard } from './socket.wsJwtGuard';
import { User } from '../user/entities/user.entity';
import { UserHostSocket } from './entities/userHostSocket.entity';

type typeSocket = Socket & { user: any };
@WebSocketGateway({ cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
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
  @SubscribeMessage(SOCKET_EVENT.CREATE_QUIZ_CSS)
  private async handleCreateRoom(
    client: typeSocket,
    payload: { idSetOfQuestions: string },
  ): Promise<void> {
    const idRoom = RandomFunc();
    client.join(idRoom);
    const questions = await this._questionService.findAll({
      idSetOfQuestions: payload.idSetOfQuestions,
      // createBy: client.user,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 53 ===> questions`,
      questions,
    );

    const mapIdQuestions = questions.map((e) => e._id);
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 59 ===> mapIdQuestions`,
      mapIdQuestions,
    );

    const userHostSocket =
      await this._userHostSocketService.createUserHostSocket({
        idRoom: idRoom,
        host: client.id,
        createBy: client.user.id,
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

  @UseGuards(WsJwtGuard)
  @SubscribeMessage(SOCKET_EVENT.JOIN_ROOM_CSS)
  private async handleJoinRoom(
    client: typeSocket,
    payload: { idRoom: string },
  ): Promise<void> {
    const host = await this._userHostSocketService.findOne({
      idRoom: payload.idRoom,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 97 ===> host`,
      host,
    );
    if (host) {
      client.join(payload.idRoom);
      // createMemberSocket
      const newMember = await this._userMemberSocketService.createMemberSocket({
        idRoom: payload.idRoom,
        userId: client.user._id,
      });
      console.log(
        `LHA:  ===> file: socket.gateway.ts ===> line 104 ===> newMember`,
        newMember,
      );

      if (newMember) {
        const listMember = await this._userMemberSocketService.findAll({
          idRoom: payload.idRoom,
        });
        this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
          msg: 'Join Room Quiz Success',
          users: this._userMemberSocketService.cvtJSON(listMember),
        });
        return;
      }
      this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
        msg: 'Join Room Quiz False',
        user: null,
      });
      return;
    }
    this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
      msg: 'Join Room Quiz  (Dont find room)',
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
      if (host.play) {
        this.server.to(client.id).emit(SOCKET_EVENT.START_QUIZ_SSC, {
          msg: 'Start Game Fail, Game Stated',
          data: host,
        });
        return;
      }
      const startGame = await this._userHostSocketService.findOneAndUpdate(
        { _id: host._id },
        { play: true, currentQuestion: 0 },
      );
      if (startGame) {
        console.log('run start');
        this.server.in(host.idRoom).emit(SOCKET_EVENT.START_QUIZ_SSC, {
          msg: 'Start Game Success',
          data: startGame,
        });
        this.handleTakeTheQuestion(startGame);
        return;
      }

      this.server
        .in(host.idRoom)
        .emit(SOCKET_EVENT.START_QUIZ_SSC, SOCKET_EVENT.START_QUIZ_SSC, {
          msg: 'Fail Game Success',
          data: startGame,
        });
      return;
    }
    this.server.emit(SOCKET_EVENT.START_QUIZ_SSC, {
      msg: 'Dont find host start game',
      data: null,
    });
  }

  @SubscribeMessage(SOCKET_EVENT.LEAVE_ROOM_CSS)
  private handleLeaveRoom(client: Socket, payload: { idRoom: string }): void {
    this.server.emit(SOCKET_EVENT.LEAVE_ROOM_SSC, payload);
  }

  //Thong ke sau khi tra loi cau hoi
  private async handleStatistQuiz(
    idRoom: string,
    idQuestion: string,
  ): Promise<void> {
    const listScoreStatist = await this._userScoreQuizSocketService.findAll({
      idRoom,
      idQuestion,
    });
    const result: Record<string, number> = listScoreStatist.reduce((t, v) => {
      if (t[v.answer]) {
        t[v.answer] = t[v.answer] + 1;
      } else {
        t[v.answer] = 1;
      }
      return t;
    }, {});
    this.server.emit(SOCKET_EVENT.STATISTICAL_ROOM_SSC, result);
  }

  //Dap An cau hoi
  @UseGuards(WsJwtGuard)
  @SubscribeMessage(SOCKET_EVENT.ANSWER_THE_QUESTION_CSS)
  private async handleAnswerTheQuestion(
    client: typeSocket,
    payload: {
      idRoom: string;
      answer: string;
      idQuestion: string;
    },
  ): Promise<void> {
    console.log('ANSWER_THE_QUESTION_CSS', payload);
    const question = await this._questionService.findById(payload.idQuestion);
    if (question) {
      const user = await this._userMemberSocketService.findOne({
        idRoom: payload.idRoom,
        userId: client.user._id,
      });
      if (!user) {
        return;
      }

      let score = 0;
      if (payload.answer && question.answers.includes(payload.answer)) {
        const iz = question.answers.findIndex((e) => e === payload.answer);
        if (iz !== -1) {
          const correct = question.correct.findIndex((e) => e === iz);
          if (correct !== -1) {
            score = question.score;
          }
        }
      }
      const newUserScore =
        await this._userScoreQuizSocketService.createUserHostSocket({
          ...payload,
          score,
          question: question.question,
          userId: client.user._id,
          socketId: client.id,
        });
      console.log(
        `LHA:  ===> file: socket.gateway.ts ===> line 235 ===> newUserScore`,
        newUserScore,
      );
      // this.server.emit(SOCKET_EVENT.ANSWER_THE_QUESTION_SSC, payload);
    }
  }

  //get cau hoi
  // @SubscribeMessage(SOCKET_EVENT.TAKE_THE_QUESTION_CSS)
  private async handleTakeTheQuestion(host: UserHostSocket): Promise<void> {
    const currentQuestion = await this._questionService.findById(
      host.questions[host.currentQuestion],
    );
    if (currentQuestion) {
      const payload = {
        _id: currentQuestion._id,
        question: currentQuestion.question,
        answers: currentQuestion.answers,
        duration: currentQuestion.duration,
        idRoom: host.idRoom,
      };
      const nextGame = await this._userHostSocketService.findOneAndUpdate(
        { _id: host._id },
        { currentQuestion: host.currentQuestion + 1 },
      );
      if (nextGame) {
        this.server.in(host.idRoom).emit(SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
          msg: 'Take Question Success',
          data: payload,
        });

        setTimeout(() => {
          this.handleStatistQuiz(
            host.idRoom,
            host.questions[host.currentQuestion],
          );
        }, currentQuestion.duration * 1000 + 500);

        setTimeout(() => {
          this.handleTakeTheQuestion(nextGame);
        }, currentQuestion.duration * 1000 + 5000);
        return;
      }
      this.server.in(host.idRoom).emit(SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
        msg: 'Next Question Fail Server',
        data: null,
      });
      return;
    }
    this.server.in(host.idRoom).emit(SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
      msg: 'Dont find Question Fail Server',
      data: null,
    });
    return;
  }
  afterInit(server: Server) {
    this.logger.log('Init');
  }

  @UseGuards(WsJwtGuard)
  async handleDisconnect(client: typeSocket) {
    const results = await this._userMemberSocketService.findOneAndRemove({
      userId: client.user._id,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 207 ===> results2`,
      results,
    );
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
