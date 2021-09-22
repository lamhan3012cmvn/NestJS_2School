import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateBy } from 'apps/share/mongodb/createBy.entity';
import { regexpObjectId } from 'apps/share/mongodb/RegExp';
import { Document } from 'mongoose';

export type RoadMapContentEntity = RoadMapContent & Document;

@Schema({ timestamps: true })
export class RoadMapContent extends CreateBy {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  description: string;
  @Prop({ default: 0 })
  type: 0 | 1 | 2 | 3;
  @Prop({ required: true })
  data: any;
  @Prop({ required: true, RegExp: regexpObjectId })
  idRoadMap: string;
}

export const RoadMapContentSchema =
  SchemaFactory.createForClass(RoadMapContent);
