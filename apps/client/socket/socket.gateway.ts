import { ClassService } from 'apps/client/class/services/class.service';
import { DFStatus } from 'apps/share/enums/status.enum';
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
import { MemberClassService } from '../memberClass/services/memberClass.service';
import { Notification } from '../notifycation/entities/notification.entity';
import { NotificationService } from '../notifycation/services/notification.service';
import { QuizClassService } from '../quizClass/services/quizClass.service';
import { QuizClassScoreService } from '../quizClassScore/services/quizClassScore.service';

type typeSocket = Socket & { user: any };
@WebSocketGateway({ cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly _classService: ClassService,
    private readonly _questionService: QuestionService,
    private readonly _quizClassService: QuizClassService,
    private readonly _quizClassScoreService: QuizClassScoreService,
    private readonly _userHostSocketService: UserHostSocketService,
    private readonly _userScoreQuizSocketService: UserScoreQuizSocketService,
    private readonly _userMemberSocketService: UserMemberSocketService,
    private readonly _setOfQuestionsService: SetOfQuestionsService,
    private readonly _deviceService: DeviceService,
    private readonly _memberClassService: MemberClassService,
    private readonly _notificationService: NotificationService,
  ) {}

  @WebSocketServer() private server: Server;
  private logger: Logger = new Logger('AppGateway');
  private count = 0;

  @UseGuards(WsJwtGuard)
  @SubscribeMessage(SOCKET_EVENT.CREATE_QUIZ_CSS)
  private async handleCreateRoom(
    client: typeSocket,
    payload: {
      idSetOfQuestions: string;
      idClass: string;
      title: string;
      description: string;
    },
  ): Promise<void> {
    console.log(client.id);
    console.log('Count', this.count);
    const questions = await this._questionService.findAll({
      idSetOfQuestions: payload.idSetOfQuestions,
      createBy: client.user.createdBy,
    });
    if (questions.length <= 0) {
      this.server.to(client.id).emit(SOCKET_EVENT.CREATE_QUIZ_SSC, {
        msg: 'Dont find questions or not the owner of the room',
        idRoom: null,
        success: false,
      });
      return;
    }
    const mapIdQuestions = questions
      .map((e) => e._id)
      .sort(() => Math.random() - 0.5);

    const score = questions.reduce((t, v) => {
      return t + v.score;
    }, 0);

    const idRoom = RandomFunc();
    client.join(idRoom);

    const userHostSocket =
      await this._userHostSocketService.createUserHostSocket({
        idRoom: idRoom,
        host: client.id,
        idClass: payload.idClass,
        createBy: client.user.createdBy,
        questions: mapIdQuestions,
        title: payload.title,
        idSetOfQuestions: payload.idSetOfQuestions,
        score: score,
      });
    if (userHostSocket) {
      const listMember = await this._memberClassService.getMemberNotifyByClass(
        payload.idClass,
      );
      const currentClass = await this._classService.findById(payload.idClass);
      const listNotify = listMember.map((e: any) => {
        return {
          idUser: e.idUser,
          title: payload.title,
          description: payload.description,
          typeNotify: 'quiz',
          data: idRoom,
          image: currentClass.image,
        };
      });
      this._notificationService.createNotification(listNotify, idRoom);

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
    console.log('Member', client.id);
    const host = await this._userHostSocketService.findOne({
      idRoom: payload.idRoom,
    });
    if (host) {
      // createMemberSocket
      const newMember = await this._userMemberSocketService.createMemberSocket({
        idRoom: payload.idRoom,
        userId: client.user.createdBy,
        user: client.user,
        isHost: host.createBy === client.user.createdBy,
      });

      if (newMember) {
        console.log('Join room nek', this.count);
        this.count++;

        const listMember = await this._userMemberSocketService.findAll({
          idRoom: payload.idRoom,
        });
        console.log(
          `LHA:  ===> file: socket.gateway.ts ===> line 155 ===> listMember`,
          listMember.length,
        );

        console.log('Send list member to client');
        this.server.to(client.id).emit(SOCKET_EVENT.JOIN_ROOM_NEW_SSC, {
          msg: 'Join Room Quiz Success User',
          users: listMember.map((e) => e.user),
          success: true,
        });
        // const abc=this.
        console.log('Send room member to client');
        //send nhung nguoi da join room

        client.to(host.idRoom).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
          msg: 'Join Room Quiz Success Users',
          user: client.user,
          success: true,
        });
        client.join(payload.idRoom);

        console.log('Count', this.count);

        return;
      }
      this.server.to(client.id).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
        msg: 'Join Room Quiz False',
        err: false,
        success: false,
      });
      return;
    }
    this.server.to(client.id).emit(SOCKET_EVENT.JOIN_ROOM_SSC, {
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
          success: false,
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
          success: true,
        });
        this.handleTakeTheQuestion(startGame);
        return;
      }

      this.server
        .in(host.idRoom)
        .emit(SOCKET_EVENT.START_QUIZ_SSC, SOCKET_EVENT.START_QUIZ_SSC, {
          msg: 'Fail Game Success',
          data: startGame,
          success: false,
        });
      return;
    }
    this.server.emit(SOCKET_EVENT.START_QUIZ_SSC, {
      msg: 'Dont find host start game',
      data: null,
      success: false,
    });
  }

  @SubscribeMessage(SOCKET_EVENT.LEAVE_ROOM_CSS)
  @UseGuards(WsJwtGuard)
  private async handleLeaveRoom(
    client: typeSocket,
    payload: { idRoom: string },
  ): Promise<void> {
    const member = await this._userMemberSocketService.findOne({
      userId: client.user.createdBy,
      idRoom: payload.idRoom,
    });
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 255 ===> member`,
      member,
    );
    if (member) {
      client.leave(member.idRoom);

      const removeUserMember =
        await this._userMemberSocketService.findOneAndRemove({
          userId: client.user.createdBy,
          idRoom: payload.idRoom,
        });
      if (removeUserMember) {
        console.log(
          `LHA:  ===> file: socket.gateway.ts ===> line 268 ===> removeUserMember`,
          removeUserMember,
        );
        this.server.in(payload.idRoom).emit(SOCKET_EVENT.LEAVE_ROOM_SSC, {
          msg: 'Leave Room Success',
          data: { idUser: client.user },
          success: true,
        });
        return;
      }
      this.server.to(client.id).emit(SOCKET_EVENT.LEAVE_ROOM_SSC, {
        msg: 'Leave Room False (Dont find Room and remove)',
        data: { idUser: null },
        success: false,
      });
      return;
    } else {
      this.server.to(client.id).emit(SOCKET_EVENT.LEAVE_ROOM_SSC, {
        msg: 'Leave Room False (Dont find User)',
        data: { idUser: null },
        success: false,
      });
      return;
    }
  }

  private async handleNotifyEndQuiz(host: UserHostSocket): Promise<void> {
    console.log('Run end Notify End Quiz');
    // this.server.in(host.idRoom).emit(SOCKET_EVENT.END_QUIZ_SSC, {
    //   msg: 'End Quiz',
    //   success: true,
    // });
    const classScore = await this._quizClassService.createQuizClass({
      classId: host.idClass,
      setOfQuestionId: host.idSetOfQuestions,
      title: host.title,
      createBy: host.createBy,
      score: host.score,
    });
    if (classScore) {
      const listMember = await this._userScoreQuizSocketService.findScore(
        host.idRoom,
      );
      const listQuizClassScore = [];
      for (const user of listMember) {
        const resultSaveQuizClass =
          await this._quizClassScoreService.createQuizClassScore({
            memberId: user._id.idUser,
            score: user.score,
            quizClassId: classScore._id,
          });
        if (resultSaveQuizClass) {
          listQuizClassScore.push(resultSaveQuizClass);
        }
      }
      console.log(
        `LHA:  ===> file: socket.gateway.ts ===> line 292 ===> listQuizClassScore`,
        listQuizClassScore,
      );
      this.server
        .in(host.idRoom)
        .emit(SOCKET_EVENT.STATISTICAL_ROOM_FINAL_SSC, {
          msg: 'STATISTICAL_ROOM_FINAL_SSC',
          success: true,
          data: {
            member: listQuizClassScore,
            class: classScore,
          },
        });
      for (const user of listMember) {
        this._userScoreQuizSocketService.removeUserHostSocket(
          user._id.idUser,
          host.idRoom,
        );
      }
      this._userHostSocketService.removeUserHostSocket(
        host.createBy,
        host.idRoom,
      );
      this._userMemberSocketService.removeUserByRoom(host.idRoom);
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
    this.server.to(idRoom).emit(SOCKET_EVENT.STATISTICAL_ROOM_SSC, {
      data: result,
      msg: 'STATISTICAL_ROOM_SSC',
      success: true,
    });
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
    const obj = Object.assign({}, payload, {
      createdBy: client.user.createdBy,
    });
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
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 389 ===> host`,
      host,
    );
    if (host) return;
    const question = await this._questionService.findById(payload.idQuestion);
    console.log(
      `LHA:  ===> file: socket.gateway.ts ===> line 392 ===> question`,
      question,
    );
    if (question) {
      const user = await this._userMemberSocketService.findOne({
        idRoom: payload.idRoom,
        userId: client.user.createdBy,
      });
      console.log(
        `LHA:  ===> file: socket.gateway.ts ===> line 404 ===> user`,
        user,
      );
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
          userId: client.user.createdBy,
          socketId: client.id,
        });
      // this.server.emit(SOCKET_EVENT.ANSWER_THE_QUESTION_SSC, payload);
      console.log(
        `LHA:  ===> file: socket.gateway.ts ===> line 419 ===> newUserScore`,
        newUserScore,
      );
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
        indexQuestion: `${host.currentQuestion + 1}/${host.questions.length}`,
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
          success: true,
        });

        setTimeout(async () => {
          const userAnswer = await this._userScoreQuizSocketService.findAll({
            idRoom: host.idRoom,
            idQuestion: currentQuestion._id,
          });
          console.log(
            `LHA:  ===> file: socket.gateway.ts ===> line 453 ===> userAnswer`,
            userAnswer,
          );
          const userDontAnswer = await this._userMemberSocketService.findAll({
            userId: { $nin: userAnswer.map((e) => e.userId) },
            idRoom: host.idRoom,
            isHost: false,
          });
          console.log(
            `LHA:  ===> file: socket.gateway.ts ===> line 461 ===> userDontAnswer`,
            userDontAnswer,
          );

          // const payload = {
          //   idRoom: host.idRoom,
          //   answer: null,
          //   idQuestion: currentQuestion._id,
          // };

          for (const uda of userDontAnswer) {
            await this._userScoreQuizSocketService.createUserHostSocket({
              idRoom: host.idRoom,
              answer: null,
              idQuestion: currentQuestion._id,
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
      return;
    }
    if (host.questions[host.currentQuestion] === undefined) {
      this.handleNotifyEndQuiz(host);
      return;
    }
    this.server.in(host.idRoom).emit(SOCKET_EVENT.TAKE_THE_QUESTION_SSC, {
      msg: 'Dont find Question Fail Server',
      data: null,
      success: false,
    });
    return;
  }
  afterInit(server: Server) {
    this.logger.log('Init');
  }

  @UseGuards(WsJwtGuard)
  async handleDisconnect(client: typeSocket) {
    // const results = await this._userMemberSocketService.findOneAndRemove({
    //   userId: client.user._id,
    // });
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @UseGuards(WsJwtGuard)
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
