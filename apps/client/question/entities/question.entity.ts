import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType } from 'typegoose';

export class Question extends BaseModel<Question> {
  @Prop({ default: '' })
  @Expose()
  name: string;
  @Prop({ default: '' })
  @Expose()
  description: string;
  @Prop({ default: '' })
  @Expose()
  usedTimes: string;
  @Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ })
  @Expose()
  createdBy: string;

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
