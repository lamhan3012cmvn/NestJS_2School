import {
  BaseModel,
  schemaOptions,
} from '../../../share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';

export class Notification extends BaseModel<Notification> {
  @prop()
  @Expose()
  idUser?: string;
  @prop({ default: false })
  @Expose()
  isSeen?: boolean;
  @prop()
  @Expose()
  title?: string;
  @prop()
  @Expose()
  description?: string;
  @prop()
  @Expose()
  image: string;
  @prop()
  @Expose()
  typeNotify?: string;
  @prop()
  @Expose()
  data?: string;

  static get model(): ModelType<Notification> {
    return new Notification().getModelForClass(Notification, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Notification): InstanceType<Notification> {
    const result = new this.model(payload);
    return result;
  }
}
