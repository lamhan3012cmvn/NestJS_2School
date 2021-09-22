import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceEntity = Device & Document;

@Schema()
export class Device {
  @Prop({ default: '' })
  appVersion: string;
  @Prop({ default: '' })
  deviceModel: string;
  @Prop({ default: '' })
  deviceUUid: string;
  @Prop()
  fcmToken: string;
  @Prop({ default: 0 })
  status: number;
  @Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ })
  createdBy: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
