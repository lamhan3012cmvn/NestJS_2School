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

  async createQuizClass(payload): Promise<QuizClass> {
    try {
      const obj: any = { ...payload };
      const model = QuizClass.createModel(obj);
      const quizClass = await this.create(model);
      if (quizClass) {
        return this.cvtJSON(quizClass) as QuizClass;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE_quizClass');
      return null;
    }
  }
}
