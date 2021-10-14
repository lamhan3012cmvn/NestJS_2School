import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { Prop } from '@nestjs/mongoose';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { InstanceType, ModelType } from 'typegoose';
import { Expose } from 'class-transformer';

export class Device extends BaseModel<Device> {
  @Prop({ default: '' })
  @Expose()
  private appVersion?: string;
  @Prop({ default: '' })
  @Expose()
  private deviceModel?: string;
  @Prop({ default: '' })
  @Expose()
  private deviceUUid?: string;
  @Prop({ required: true })
  @Expose()
  private fcmToken: string;
  @Prop({ default: 0 })
  @Expose()
  private status: number;
  @Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ })
  @Expose()
  private createdBy: string;

  static get model(): ModelType<Device> {
    return new Device().getModelForClass(Device, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Device): InstanceType<Device> {
    return new this.model(payload);
  }
}
