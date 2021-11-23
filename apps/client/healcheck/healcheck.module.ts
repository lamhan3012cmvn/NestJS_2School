import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserScoreQuizSocket } from '../socket/entities/userScoreQuizSocket.entity';
import { UserScoreQuizSocketService } from '../socket/services/userScoreQuizSocket.service';
import { HealcheckController } from './healcheck.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserScoreQuizSocket.modelName,
        schema: UserScoreQuizSocket.model.schema,
      },
    ]),
  ],
  controllers: [HealcheckController],
  providers: [UserScoreQuizSocketService],
})
export class HealcheckModule {}
