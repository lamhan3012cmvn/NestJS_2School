import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { SetOfQuestionsController } from './controllers/setOfQuestions.controller';
import { SetOfQuestionsService } from './services/setOfQuestions.service';
import { SetOfQuestion } from './entities/setOfQuestions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SetOfQuestion.modelName, schema: SetOfQuestion.model.schema },
    ]),
  ],
  controllers: [SetOfQuestionsController],
  providers: [SetOfQuestionsService],
})
export class SetOfQuestionsModule {}
