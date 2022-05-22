import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminEntity = Admin & Document;

@Schema({ timestamps: true })
export class Admin {
  @Prop({ default: '' })
  firstName: string;
  @Prop({ default: '' })
  lastName: string;
  @Prop({ default: '' })
  displayName: string;
  @Prop({ default: '' })
  intro: string;
  @Prop({ default: null, ref: 'UpLoadFile' })
  image: string;
  @Prop({ default: '' })
  blurHash: string;
  @Prop({ default: '', RegExp: /^[0-9]{10}$/ })
  phone: string;
  @Prop({ default: 0 })
  status: number;
  @Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ })
  createdBy: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

export interface ISchemaAdmin {
  _id?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  intro?: string;
  image?: string;
  blurHash?: string;
  phone?: string;
  status?: number;
  createdBy?: string;
}
