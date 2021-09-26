import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthEntity = Auth & Document;

@Schema({ timestamps: true })
export class Auth {
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ default: false })
  verify: boolean;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);

export interface IAuth {
  id: string;
  username: string;
  password: string;
}
