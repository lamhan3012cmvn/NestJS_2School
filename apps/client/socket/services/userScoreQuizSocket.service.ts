import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { UserScoreQuizSocket } from '../entities/userScoreQuizSocket.entity';

@Injectable()
export class UserScoreQuizSocketService extends BaseService<UserScoreQuizSocket> {
  constructor(
    @InjectModel(UserScoreQuizSocket.modelName)
    private readonly _userScoreQuizSocket: ModelType<UserScoreQuizSocket>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _userScoreQuizSocket;
  }

  async createUserHostSocket(payload: any): Promise<UserScoreQuizSocket> {
    try {
      const obj: any = { ...payload };
      const model = UserScoreQuizSocket.createModel(obj);

      const newUserScoreQuiz = await this.create(model);
      if (newUserScoreQuiz) {
        return this.cvtJSON(newUserScoreQuiz) as UserScoreQuizSocket;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-UserHostSocketService',
      );
      return null;
    }
  }
}
