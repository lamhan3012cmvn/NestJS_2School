import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CreateBy } from 'apps/share/mongodb/createBy.entity';
import { Document } from 'mongoose';

export type RoadMapEntity = RoadMap & Document;

@Schema({ timestamps: true })
export class RoadMap extends CreateBy {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  description: string;
}

export const RoadMapSchema = SchemaFactory.createForClass(RoadMap);
