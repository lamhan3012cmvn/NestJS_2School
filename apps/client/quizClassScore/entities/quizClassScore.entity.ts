import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class QuizClassScore extends BaseModel<QuizClassScore> {
  @prop({ required: true })
  memberId: string;
  @prop({ required: true })
  score: number;
  @prop({ required: true })
  quizClassId: string;

  static get model(): ModelType<QuizClassScore> {
    return new QuizClassScore().getModelForClass(QuizClassScore, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: QuizClassScore): InstanceType<QuizClassScore> {
    return new this.model(payload);
  }
}
