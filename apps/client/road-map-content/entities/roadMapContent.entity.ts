import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class RoadMapContent extends BaseModel<RoadMapContent> {
  @prop({ default: '' })
  name: string;
  @prop({ default: '' })
  description: string;
  @prop({ default: DFStatus.Active })
  status: number;
  @prop({ default: 0 })
  type: 0 | 1 | 2 | 3;
  @prop({ required: true })
  data: string;
  @prop({ required: true })
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
