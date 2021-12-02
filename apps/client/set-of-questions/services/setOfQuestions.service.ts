import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from 'apps/client/question/entities/question.entity';
import { QuestionService } from 'apps/client/question/services/question.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { CreateMultiQuestion } from '../dto/CreateMultiQuestion/req.dto';
import { SetOfQuestion } from '../entities/setOfQuestions.entity';

@Injectable()
export class SetOfQuestionsService extends BaseService<SetOfQuestion> {
  constructor(
    @InjectModel(SetOfQuestion.modelName)
    private readonly _setOfQuestionsModel: ModelType<SetOfQuestion>,
    private readonly _questionsService: QuestionService,
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
      obj.createBy = createdBy;
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
  async createSetOfQuestionExcel(
    createBy: string,
    idSetOfQuestion: string,
    payload: CreateMultiQuestion,
  ) {
    try {
      //create setOfQuestion
      // const objSetOfQuestion = payload.setOfQuestion;
      // const setOfQuestion = await this.createSetOfQuestions(
      //   createBy,
      //   objSetOfQuestion,
      // );
      // if (!setOfQuestion) {
      //   throw new Error2SchoolException('create setOfQuestion fail');
      // }
      const listQuestion = payload.questions.map((item) => {
        return {
          ...item,
          setOfQuestionId: idSetOfQuestion,
          createBy: createBy,
        };
      });
      const questions = await this._questionsService.createMultiQuestion(
        listQuestion,
      );
      if (!questions) {
        throw new Error2SchoolException('create questions fail');
      }
      return this.cvtJSON(questions) as Array<Question>;
      //create questions
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
