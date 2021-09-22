import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateBy } from 'apps/share/mongodb/createBy.entity';
import { Document } from 'mongoose';

export type ClassesEntity = Classes & Document;

@Schema({ timestamps: true })
export class Classes extends CreateBy {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  intro: string;
  @Prop({ default: '' })
  image: string;
  @Prop({ default: '' })
  blurHash: string;
  @Prop({ default: [] })
  member: Array<string>;
  @Prop({ default: 0 })
  status: number;
}
export const ClassesSchema = SchemaFactory.createForClass(Classes);
