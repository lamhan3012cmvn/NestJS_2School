import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';
export class Question extends BaseModel<Question> {
  @prop({ default: '' })
  @Expose()
  question: string;
  @prop({ default: [] })
  @Expose()
  answers: Array<string>;
  @prop({ default: [] })
  @Expose()
  correct: Array<number>;
  @prop({ default: DFStatus.Active })
  @Expose()
  status: number;
  @prop({ required: true })
  @Expose()
  duration: number;
  @prop({ required: true })
  @Expose()
  score: number;
  @prop({})
  @Expose()
  idSetOfQuestions: string;
  @prop({})
  @Expose()
  createBy: string;

  static get model(): ModelType<Question> {
    return new Question().getModelForClass(Question, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Question): InstanceType<Question> {
    return new this.model(payload);
  }
}
