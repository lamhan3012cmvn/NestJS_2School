import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';

export class RMCFile extends BaseModel<RMCFile> {
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  fileType: string;

  static get model(): ModelType<RMCFile> {
    return new RMCFile().getModelForClass(RMCFile, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: RMCFile): InstanceType<RMCFile> {
    return new this.model(payload);
  }
}
