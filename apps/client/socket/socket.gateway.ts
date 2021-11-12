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
import { DeviceService } from '../device/services/device.service';

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
    private readonly _deviceService: DeviceService,
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
    console.log(client.id);
    const questions = await this._questionService.findAll({
      idSetOfQuestions: payload.idSetOfQuestions,
      createBy: client.user.createdBy,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 52 ===> questions`,
      questions,
    );
    if (questions.length <= 0) {
      this.server.to(client.id).emit(SOCKET_EVENT.CREATE_QUIZ_SSC, {
        msg: 'Dont find questions or not the owner of the room',
        idRoom: null,
        success: false,
      });
      return;
    }
    const mapIdQuestions = questions.map((e) => e._id);

    const idRoom = RandomFunc();
    client.join(idRoom);

    const userHostSocket =
      await this._userHostSocketService.createUserHostSocket({
        idRoom: idRoom,
        host: client.id,
        createBy: client.user.createdBy,
        questions: mapIdQuestions,
      });
    if (userHostSocket) {
      this.server.to(client.id).emit(SOCKET_EVENT.CREATE_QUIZ_SSC, {
        msg: 'Create Room Quiz Success',
        idRoom: idRoom,
        success: true,
      });
      return;
    } else {
      this.server.to(client.id).emit(SOCKET_EVENT.CREATE_QUIZ_SSC, {
        msg: 'Create Room Quiz Fail',
        idRoom: null,
        success: false,
      });
      return;
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
    if (host) {
      // createMemberSocket
      const newMember = await this._userMemberSocketService.createMemberSocket({
        idRoom: payload.idRoom,
        userId: client.user.createdBy,
        user: client.user,
      });
      console.log(
        `LHA:  ===> file: socket.gateway.ts ===> line 104 ===> newMember`,
        newMember,
      );

      if (newMember) {
        const listMember = await this._userMemberSocketService.findAll({
          idRoom: payload.idRoom,
        });

        this.server.to(client.id).emit(SOCKET_EVENT.JOIN_ROOM_NEW_SSC, {
          msg: 'Join Room Quiz Success User',
          users: listMember.map((e) => e.user),
          success: true,
        });
        // const abc=this.
        this.server.to(host.idRoom).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
          msg: 'Join Room Quiz Success Users',
          user: client.user,
          success: true,
        });
        client.join(payload.idRoom);

        return;
      }
      this.server.to(client.id).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
        msg: 'Join Room Quiz False',
        err: false,
        success: false,
      });
      return;
    }
    this.server.emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
      msg: 'Join Room Quiz  (Dont find room)',
      err: false,
      success: false,
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
  private async handleLeaveRoom(client: typeSocket, {}): Promise<void> {
    const member = await this._userMemberSocketService.findOne({
      userId: client.user._id,
    });
    if (member) {
      const removeUserMember =
        await this._userMemberSocketService.findOneAndRemove({
          userId: client.user._id,
        });
      if (removeUserMember) {
        this.server.in(member.idRoom).emit(SOCKET_EVENT.LEAVE_ROOM_SSC, {
          msg: 'Leave Room Success',
          idUser: client.user._id,
          success: true,
        });
        return;
      }
      this.server.to(client.id).emit(SOCKET_EVENT.LEAVE_ROOM_SSC, {
        msg: 'Leave Room False (Dont find Room and remove)',
        idUser: null,
        success: false,
      });
      return;
    } else {
      this.server.to(client.id).emit(SOCKET_EVENT.LEAVE_ROOM_SSC, {
        msg: 'Leave Room False (Dont find User)',
        idUser: null,
        success: false,
      });
      return;
    }
  }

  private async handleStatistQuizFinal(idRoom: string): Promise<void> {
    const listScoreStatist = await this._userScoreQuizSocketService.findAll({
      idRoom,
    });
    this.server.to(idRoom).emit(SOCKET_EVENT.STATISTICAL_ROOM_FINAL_SSC, null);
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
    const question = await this._questionService.findById(idQuestion);
    const objResult = question.answers.reduce(
      (t, v) => {
        return { ...t, [v]: 0 };
      },
      { null: 0 },
    );
    const result: Record<string, number> = listScoreStatist.reduce((t, v) => {
      if (t[v.answer]) {
        t[v.answer] = t[v.answer] + 1;
      } else {
        t[v.answer] = 1;
      }
      return t;
    }, objResult);
    this.server.to(idRoom).emit(SOCKET_EVENT.STATISTICAL_ROOM_SSC, result);
  }
  // SEND_FCM_TOKEN_CSS
  @UseGuards(WsJwtGuard)
  @SubscribeMessage(SOCKET_EVENT.SEND_FCM_TOKEN_CSS)
  private async handleSaveDevice(
    client: typeSocket,
    payload: {
      appVersion: string;
      deviceModel: string;
      deviceUUid: string;
      fcmToken: string;
    },
  ): Promise<void> {
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 275 ===> payload`,
      payload,
    );

    const obj = Object.assign(payload, {
      createdBy: client.user.createdBy,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 283 ===> obj`,
      obj,
    );
    await this._deviceService.createDevice(obj);
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
    const host = await this._userHostSocketService.findOne({
      idRoom: payload.idRoom,
      host: client.id,
    });
    if (!host) return;
    const question = await this._questionService.findById(payload.idQuestion);
    if (question) {
      const user = await this._userMemberSocketService.findOne({
        idRoom: payload.idRoom,
        userId: client.user.createdBy,
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
      console.log('host.currentQuestion', host.currentQuestion);
      if (nextGame) {
        this.server.in(host.idRoom).emit(SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
          msg: 'Take Question Success',
          data: payload,
        });

        setTimeout(async () => {
          const userAnswer = await this._userScoreQuizSocketService.findAll({
            idRoom: host.idRoom,
            idQuestion: currentQuestion._id,
          });
          const userDontAnswer = await this._userMemberSocketService.findAll({
            userId: { $nin: userAnswer.map((e) => e.userId) },
            idRoom: host.idRoom,
          });

          const payload = {
            idRoom: host.idRoom,
            answer: null,
            idQuestion: currentQuestion._id,
          };

          for (const uda of userDontAnswer) {
            await this._userScoreQuizSocketService.createUserHostSocket({
              ...payload,
              score: 0,
              question: currentQuestion.question,
              userId: uda.userId,
              socketId: '',
            });
          }

          this.handleStatistQuiz(
            host.idRoom,
            host.questions[host.currentQuestion],
          );

          setTimeout(() => {
            this.handleTakeTheQuestion(nextGame);
          }, 3500);
        }, currentQuestion.duration * 1000);

        return;
      }
      this.handleStatistQuizFinal(host.idRoom);
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
    console.log(client.user);
    const results = await this._userMemberSocketService.findOneAndRemove({
      userId: client.user._id,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 207 ===> results2`,
      results,
    );
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @UseGuards(WsJwtGuard)
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
