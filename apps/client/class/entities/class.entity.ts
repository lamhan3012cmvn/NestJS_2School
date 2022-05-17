import { DFStatus } from 'apps/share/enums/status.enum';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { InstanceType, ModelType, prop } from 'typegoose';
import {
  BaseModel,
  schemaOptions,
} from './../../../share/mongodb/baseModel.entity';

export class Classes extends BaseModel<Classes> {
  @prop()
  @Expose()
  name: string;
  @prop()
  @Expose()
  intro: string;
  @prop()
  @Expose()
  topic: string;
  @prop({ default: '' })
  @Expose()
  image: string;
  @prop({ default: '' })
  @Expose()
  blurHash: string;
  // @prop({ default: [] })
  // @Expose()
  // member: Array<string>;
  @prop({ default: DFStatus.inActive })
  @Expose()
  status: number;
  @prop({ required: true, ref: 'User' })
  @Expose()
  createdBy: ObjectId;
  @prop({ ref: 'Message' })
  @Expose()
  latestMessage: ObjectId;
  @prop({ default: [] })
  @Expose()
  setOfQuestionShare: Array<ObjectId>;
  @prop({ default: 0 })
  @Expose()
  price: number;

  static get model(): ModelType<Classes> {
    return new Classes().getModelForClass(Classes, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Classes): InstanceType<Classes> {
    const result = new this.model(payload);
    return result;
  }
}
