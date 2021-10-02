import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'apps/share/services/baseService.service';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService extends BaseService<Question> {
  constructor(
    @InjectModel(Question.modelName)
    private readonly _setOfQuestionsModel: ModelType<Question>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
  }
}
