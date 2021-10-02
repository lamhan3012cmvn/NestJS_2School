import { LoggerService } from 'apps/share/services/logger.service';
import { Module } from '@nestjs/common';
import { QuestionController } from './controllers/question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.modelName, schema: Question.model.schema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [LoggerService, QuestionService],
})
export class QuestionModule {}
