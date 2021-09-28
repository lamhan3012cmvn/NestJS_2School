import { Module } from '@nestjs/common';
import { QuestionController } from './controllers/question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './entities/question.entity';
import {
  SetOfQuestion,
  SetOfQuestionSchema,
} from './entities/setOfQuestions.entity';
import { QuestionService } from './services/question.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
      { name: SetOfQuestion.name, schema: SetOfQuestionSchema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
