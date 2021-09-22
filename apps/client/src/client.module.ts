import { Module } from '@nestjs/common';
import { SharedModule } from 'apps/share/shared.module';
import { TerminusModule } from '@nestjs/terminus';
import { QuestionModule } from '../question/question.module';
import { RoadMapModule } from '../road-map/road-map.module';
import { DeviceModule } from '../device/device.module';
import { ClassModule } from '../class/class.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MongooseModule } from '@nestjs/mongoose';
import { setupMongoDb } from 'apps/share/mongodb/setup';

@Module({
  imports: [
    SharedModule,
    TerminusModule,
    MongooseModule.forRootAsync(setupMongoDb('MONGODB_URI')),
    QuestionModule,
    RoadMapModule,
    DeviceModule,
    ClassModule,
    AuthenticationModule,
  ],
  controllers: [],
})
export class ClientModule {}
