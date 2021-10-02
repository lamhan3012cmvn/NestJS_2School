import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { RoadMapContent } from './../../road-map-content/entities/roadMapContent.entity';
import { ModelType, InstanceType } from 'typegoose';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class RoadMap extends BaseModel<RoadMap> {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  description: string;
  @Prop({ default: '' })
  createBy: string;

  static get model(): ModelType<RoadMap> {
    return new RoadMap().getModelForClass(RoadMap, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: RoadMap): InstanceType<RoadMap> {
    return new this.model(payload);
  }
}
