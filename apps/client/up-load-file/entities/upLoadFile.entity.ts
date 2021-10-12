import {
  BaseModel,
  schemaOptions,
} from '../../../share/mongodb/baseModel.entity';
import { Prop } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class UpLoadFile extends BaseModel<UpLoadFile> {
  @prop()
  @Expose()
  name?: string;
  @prop()
  @Expose()
  path?: string;

  static get model(): ModelType<UpLoadFile> {
    return new UpLoadFile().getModelForClass(UpLoadFile, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: UpLoadFile): InstanceType<UpLoadFile> {
    const result = new this.model(payload);
    return result;
  }
}
