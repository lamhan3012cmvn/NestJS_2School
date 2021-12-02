import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SetOfQuestionsController } from './controllers/setOfQuestions.controller';
import { SetOfQuestionsService } from './services/setOfQuestions.service';
import { SetOfQuestion } from './entities/setOfQuestions.entity';
import { LoggerService } from 'apps/share/services/logger.service';
import { SharedModule } from 'apps/share/shared.module';
import { QuestionModule } from '../question/question.module';
import { QuestionService } from '../question/services/question.service';

@Module({
  imports: [
    SharedModule,
    QuestionModule,
    MongooseModule.forFeature([
      { name: SetOfQuestion.modelName, schema: SetOfQuestion.model.schema },
    ]),
  ],
  controllers: [SetOfQuestionsController],
  providers: [SetOfQuestionsService],
})
export class SetOfQuestionsModule {}
