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
  async createQuestion(createdBy: string, payload): Promise<Question> {
    try {
      const obj: any = { ...payload };
      obj.createdBy = createdBy;
      const model = Question.createModel(obj);

      const newQuestions = await this.create(model);
      if (newQuestions) {
        return this.cvtJSON(newQuestions) as Question;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }
}
