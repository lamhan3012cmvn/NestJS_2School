import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthenticationEntity = Authentication & Document;

@Schema({ timestamps: true })
export class Authentication {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ default: false })
  verify: boolean;
}

export const AuthenticationSchema =
  SchemaFactory.createForClass(Authentication);
