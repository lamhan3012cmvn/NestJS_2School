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

@Module({
  imports: [
    SharedModule,
    TerminusModule,
    MongooseModule.forRootAsync(setupMongoDb('MONGODB_URI')),
    QuestionModule,
    SetOfQuestionsModule,
    RoadMapModule,
    DeviceModule,
    ClassModule,
    AuthModule,
    UserModule,
    SocketModule,
  ],
  controllers: [],
})
export class ClientModule {}
