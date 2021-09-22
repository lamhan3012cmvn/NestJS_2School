import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateBy } from 'apps/share/mongodb/createBy.entity';
import { Document } from 'mongoose';

export type QuestionEntity = Question & Document;

@Schema({ timestamps: true })
export class Question extends CreateBy {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  description: string;
  @Prop({ default: '' })
  usedTimes: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
