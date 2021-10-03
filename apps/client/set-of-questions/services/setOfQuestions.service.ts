import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { SetOfQuestion } from '../entities/setOfQuestions.entity';

@Injectable()
export class SetOfQuestionsService extends BaseService<SetOfQuestion> {
  constructor(
    @InjectModel(SetOfQuestion.modelName)
    private readonly _setOfQuestionsModel: ModelType<SetOfQuestion>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _setOfQuestionsModel;
  }

  async createSetOfQuestions(
    createdBy: string,
    payload,
  ): Promise<SetOfQuestion> {
    try {
      const obj: any = { ...payload };
      obj.createdBy = createdBy;
      const model = SetOfQuestion.createModel(obj);

      const newSetOfQuestion = await this.create(model);
      if (newSetOfQuestion) {
        return this.cvtJSON(newSetOfQuestion) as SetOfQuestion;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-SetOfQuestionsService',
      );
      return null;
    }
  }
}
