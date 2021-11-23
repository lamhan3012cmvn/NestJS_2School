import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { index, InstanceType, ModelType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class QuizClass extends BaseModel<QuizClass> {
  @prop({ default: '' })
  classId: string;
  @prop({ default: '' })
  setOfQuestionId: string;
  @prop({ required: true })
  score: number;
  @prop({ default: '' })
  title: string;
  @prop({ required: true })
  createBy: string;
  @prop({ default: false })
  isShow: string;
  @prop({ default: DFStatus.Active })
  status: number;

  static get model(): ModelType<QuizClass> {
    return new QuizClass().getModelForClass(QuizClass, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: QuizClass): InstanceType<QuizClass> {
    return new this.model(payload);
  }
}
