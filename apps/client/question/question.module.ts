import { LoggerService } from 'apps/share/services/logger.service';
import { Module } from '@nestjs/common';
import { QuestionController } from './controllers/question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { UpLoadFileModule } from '../up-load-file/up-load-file.module';

@Module({
  imports: [
    UpLoadFileModule,
    MongooseModule.forFeature([
      { name: Question.modelName, schema: Question.model.schema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [LoggerService, QuestionService],
  exports: [QuestionService, QuestionModule],
})
export class QuestionModule {}
