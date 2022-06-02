import { HealcheckModule } from './../healcheck/healcheck.module';
import { Module } from '@nestjs/common';
import { SharedModule } from 'apps/share/shared.module';
import { TerminusModule } from '@nestjs/terminus';
import { QuestionModule } from '../question/question.module';
import { RoadMapModule } from '../road-map/roadMap.module';
import { DeviceModule } from '../device/device.module';
import { ClassModule } from '../class/class.module';
import { AuthModule } from '../authentication/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { setupMongoDb } from 'apps/share/mongodb/setup';
import { UserModule } from '../user/user.module';
import { SetOfQuestionsModule } from '../set-of-questions/set-of-questions.module';
import { SocketModule } from '../socket/socket.module';
import { UpLoadFileModule } from '../up-load-file/up-load-file.module';
import { RoadMapContentModule } from '../road-map-content/roadMapContent.module';
import { MemberClassModule } from '../memberClass/memberClass.module';
import { NotificationModule } from '../notifycation/notification.module';
import { QuizClassModule } from '../quizClass/quizClass.module';
import { QuizClassScoreModule } from '../quizClassScore/quizClassScore.module';
import { MessageModule } from '../message/message.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TransactionModule } from '../transaction/transaction.module';
import { AdminModule } from '../admin/admin.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
    }),
    SharedModule,
    TerminusModule,
    MongooseModule.forRootAsync(setupMongoDb('MONGODB_URI')),
    QuestionModule,
    SetOfQuestionsModule,
    RoadMapModule,
    RoadMapContentModule,
    DeviceModule,
    ClassModule,
    AuthModule,
    UserModule,
    SocketModule,
    HealcheckModule,
    UpLoadFileModule,
    MemberClassModule,
    NotificationModule,
    QuizClassModule,
    QuizClassScoreModule,
    TransactionModule,
    MessageModule,
    AdminModule
  ],
})
export class ClientModule {}
