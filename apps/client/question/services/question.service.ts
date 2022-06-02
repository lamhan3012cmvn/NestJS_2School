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
    this._model = _setOfQuestionsModel;
  }
  async createQuestion(createdBy: string, payload): Promise<Question> {
    try {
      const obj: any = { ...payload };
      obj.createBy = createdBy;
      const model = Question.createModel(obj);

      const newQuestions = await this.create(model);
      if (newQuestions) {
        const findQuestion=await this.findById(newQuestions._id,"banner")
        return this.cvtJSON(findQuestion) as Question;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }

  async createMultiQuestion(payload): Promise<Array<Question>> {
    try {
      const result = await this._model.insertMany(payload);
      if (result) {
        return this.cvtJSON(result) as Array<Question>;
      }
      return [];
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-MultiQuestion');
      return [];
    }
  }

  async deleteQuestion(id: string, userId: string): Promise<Question> {
    try {
      const deletedQuestion = await this._model.findOneAndRemove({
        _id: id,
        createBy: userId,
      });
      if (deletedQuestion) {
        return this.cvtJSON(deletedQuestion) as Question;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'DELETE-ClassesService');
      return null;
    }
  }
}
