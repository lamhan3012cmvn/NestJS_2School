import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { QuizClassScore } from '../entities/quizClassScore.entity';

@Injectable()
export class QuizClassScoreService extends BaseService<QuizClassScore> {
  constructor(
    @InjectModel(QuizClassScore.modelName)
    private readonly _quizClassScoreModel: ModelType<QuizClassScore>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _quizClassScoreModel;
  }

  async createQuizClassScore(payload: {
    memberId: string;
    score: number;
    quizClassId: string;
  }): Promise<QuizClassScore> {
    try {
      const obj: any = { ...payload };
      console.log(
        `LHA:  ===> file: quizClassScore.service.ts ===> line 26 ===> obj`,
        obj,
      );
      const model = QuizClassScore.createModel(obj);
      console.log(
        `LHA:  ===> file: quizClassScore.service.ts ===> line 31 ===> model`,
        model,
      );
      const quizClassScore = await this.create(model);
      if (quizClassScore) {
        return this.cvtJSON(quizClassScore) as QuizClassScore;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE_quizClassScore');
      return null;
    }
  }
}
