import { SetOfQuestion } from './../set-of-questions/entities/setOfQuestions.entity';
import { SetOfQuestionsService } from './../set-of-questions/services/setOfQuestions.service';
import { Module } from '@nestjs/common';
import { AppGateway } from './socket.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Question } from '../question/entities/question.entity';
import { QuestionService } from '../question/services/question.service';
import { UserMemberSocketService } from './services/userSocket.service';
import { UserMemberSocket } from './entities/userSocket.entity';
import { UserScoreQuizSocket } from './entities/userScoreQuizSocket.entity';
import { UserScoreQuizSocketService } from './services/userScoreQuizSocket.service';
import { UserHostSocketService } from './services/userHostSocket.service';
import { UserHostSocket } from './entities/userHostSocket.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SetOfQuestion.modelName, schema: SetOfQuestion.model.schema },
      { name: Question.modelName, schema: Question.model.schema },
      {
        name: UserMemberSocket.modelName,
        schema: UserMemberSocket.model.schema,
      },
      {
        name: UserScoreQuizSocket.modelName,
        schema: UserScoreQuizSocket.model.schema,
      },
      {
        name: UserHostSocket.modelName,
        schema: UserHostSocket.model.schema,
      },
    ]),
  ],
  controllers: [],
  providers: [
    AppGateway,
    SetOfQuestionsService,
    QuestionService,
    UserMemberSocketService,
    UserScoreQuizSocketService,
    UserHostSocketService,
  ],
})
export class SocketModule {}
// UserScoreQuizSocket
