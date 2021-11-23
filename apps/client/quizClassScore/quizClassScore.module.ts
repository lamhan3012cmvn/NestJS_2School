import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizClassScore } from './entities/quizClassScore.entity';
import { QuizClassScoreService } from './services/quizClassScore.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: QuizClassScore.modelName,
        schema: QuizClassScore.model.schema,
      },
    ]),
  ],
  controllers: [],
  providers: [QuizClassScoreService],
})
export class QuizClassModule {}
