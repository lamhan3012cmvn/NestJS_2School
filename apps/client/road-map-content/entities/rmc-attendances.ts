import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';

export class RMCAttendances extends BaseModel<RMCAttendances> {
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  description: string;
  @prop({ required: true })
  startTime: string;
  @prop({ required: true })
  endTime: string;

  static get model(): ModelType<RMCAttendances> {
    return new RMCAttendances().getModelForClass(RMCAttendances, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: RMCAttendances): InstanceType<RMCAttendances> {
    return new this.model(payload);
  }
}
