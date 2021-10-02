import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { regexpObjectId } from 'apps/share/mongodb/RegExp';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType } from 'typegoose';

export class SetOfQuestion extends BaseModel<SetOfQuestion> {
  @Prop({ default: '' })
  @Expose()
  question: string;
  @Prop({ default: [] })
  @Expose()
  answers: Array<string>;
  @Prop({ required: true })
  @Expose()
  duration: number;
  @Prop({ default: 0 })
  @Expose()
  qIndex: number;
  @Prop({ RegExp: regexpObjectId })
  @Expose()
  idSetOfQuestions: number;
  @Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ })
  @Expose()
  createdBy: string;

  static get model(): ModelType<SetOfQuestion> {
    return new SetOfQuestion().getModelForClass(SetOfQuestion, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: SetOfQuestion): InstanceType<SetOfQuestion> {
    return new this.model(payload);
  }
}
