import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { ModelType, InstanceType, prop } from 'typegoose';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { DFStatus } from 'apps/share/enums/status.enum';

export class RoadMap extends BaseModel<RoadMap> {
  @prop({ default: '' })
  name: string;
  @prop({ default: '' })
  description: string;
  @prop({ default: DFStatus.Active })
  status: number;
  @prop({ required: true })
  createBy: string;
  @prop({ required: true })
  classBy: string;

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
