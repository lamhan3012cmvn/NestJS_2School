import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { InstanceType, ModelType, prop } from 'typegoose';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';

export enum DFStatusMessage {
  Active = 1,
  DeActive = 0,
  Delete = -1,
}

export enum DFTypeMessage {
  Text = 1,
  Image = 2,
  Video = 3,
  File = 4,
}

export class Message extends BaseModel<Message> {
  @prop({ required: true, ref: 'Classes' })
  @Expose()
  idClass: ObjectId;
  @prop({ required: true, ref: 'User' })
  @Expose()
  sender: ObjectId;
  @prop({ default: DFStatusMessage.Active })
  @Expose()
  status: number;
  @prop({ required: true })
  @Expose()
  message: string;
  @prop({ default: DFTypeMessage.Text })
  @Expose()
  typeMessage: number;
  @prop({ default: [], ref: 'User' })
  @Expose()
  isSeen: Array<ObjectId>;

  static get model(): ModelType<Message> {
    return new Message().getModelForClass(Message, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Message): InstanceType<Message> {
    return new this.model(payload);
  }
}
