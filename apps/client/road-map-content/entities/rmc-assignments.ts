import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';

export class RMCAssignment extends BaseModel<RMCAssignment> {
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  description: string;

  static get model(): ModelType<RMCAssignment> {
    return new RMCAssignment().getModelForClass(RMCAssignment, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: RMCAssignment): InstanceType<RMCAssignment> {
    return new this.model(payload);
  }
}
