import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';
import { Expose } from 'class-transformer';

export class Device extends BaseModel<Device> {
  @prop({ default: '' })
  @Expose()
  appVersion: string;
  @prop({ default: '' })
  @Expose()
  deviceModel: string;
  @prop({ default: '' })
  @Expose()
  deviceUUid: string;
  @prop({ required: true })
  @Expose()
  fcmToken: string;
  @prop({ default: 0 })
  @Expose()
  status: number;
  @prop({ default: '' })
  @Expose()
  createdBy: string;

  static get model(): ModelType<Device> {
    return new Device().getModelForClass(Device, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Device): InstanceType<Device> {
    console.log(
      `LHA:  ===> file: device.entity.ts ===> line 36 ===> payload`,
      payload,
    );
    return new this.model(payload);
  }
}
