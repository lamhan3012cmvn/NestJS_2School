import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateBy } from 'apps/share/mongodb/createBy.entity';
import { regexpObjectId } from 'apps/share/mongodb/RegExp';
import { Document } from 'mongoose';

export type SetOfQuestionEntity = SetOfQuestion & Document;

@Schema({ timestamps: true })
export class SetOfQuestion extends CreateBy {
  @Prop({ default: '' })
  question: string;
  @Prop({ default: [] })
  answers: Array<string>;
  @Prop({ required: true })
  duration: number;
  @Prop({ default: 0 })
  qIndex: number;
  @Prop({ RegExp: regexpObjectId })
  idSetOfQuestions: number;
}

export const SetOfQuestionSchema = SchemaFactory.createForClass(SetOfQuestion);
