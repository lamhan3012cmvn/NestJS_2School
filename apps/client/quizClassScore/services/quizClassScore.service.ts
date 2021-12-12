import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'apps/client/user/service/user.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { QuizClassScore } from '../entities/quizClassScore.entity';

@Injectable()
export class QuizClassScoreService extends BaseService<QuizClassScore> {
  constructor(
    @InjectModel(QuizClassScore.modelName)
    private readonly _quizClassScoreModel: ModelType<QuizClassScore>,
    private readonly _userService: UserService,
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
      const model = QuizClassScore.createModel(obj);
      const quizClassScore = await this.create(model);
      if (quizClassScore) {
        return {
          ...this.cvtJSON(quizClassScore),
          user: await this._userService.findByIdAndImage(
            quizClassScore.memberId,
          ),
        };
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE_quizClassScore');
      return null;
    }
  }

  async getQuizClassScore(idQuizClass: string): Promise<any> {
    try {
      const quizClassScores = await this._model
        .find({
          quizClassId: idQuizClass,
        })
        .lean();
      const results = [];
      for (const quizClassScore of quizClassScores) {
        results.push({
          ...this.cvtJSON(quizClassScore),
          user: await this._userService.findByIdAndImage(
            quizClassScore.memberId,
          ),
        });
      }
      return results;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'GET_quizClassScore');
      return [];
    }
  }
}
