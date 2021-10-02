import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType } from 'typegoose';
import { Prop } from '@nestjs/mongoose';
import { regexpObjectId } from 'apps/share/mongodb/RegExp';

export class RoadMapContent extends BaseModel<RoadMapContent> {
  @Prop({ default: '' })
  name: string;
  @Prop({ default: '' })
  description: string;
  @Prop({ default: 0 })
  type: 0 | 1 | 2 | 3;
  @Prop({ required: true, type: [String] })
  data: string;
  @Prop({ required: true, RegExp: regexpObjectId })
  idRoadMap: string;

  static get model(): ModelType<RoadMapContent> {
    return new RoadMapContent().getModelForClass(RoadMapContent, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: RoadMapContent): InstanceType<RoadMapContent> {
    return new this.model(payload);
  }
}
