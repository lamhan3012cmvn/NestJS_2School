import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { QuizClass } from '../entities/quizClass.entity';

@Injectable()
export class QuizClassService extends BaseService<QuizClass> {
  constructor(
    @InjectModel(QuizClass.modelName)
    private readonly _quizClassModel: ModelType<QuizClass>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _quizClassModel;
  }
}
