import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { QuizClassScore } from '../entities/quizClassScore.entity';

@Injectable()
export class QuizClassService extends BaseService<QuizClassScore> {
  constructor(
    @InjectModel(QuizClassScore.modelName)
    private readonly _quizClassScoreModel: ModelType<QuizClassScore>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _quizClassScoreModel;
  }
}
