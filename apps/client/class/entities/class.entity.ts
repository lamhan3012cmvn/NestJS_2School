import {
  BaseModel,
  schemaOptions,
} from './../../../share/mongodb/baseModel.entity';
import { Prop } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class Classes extends BaseModel<Classes> {
  @Prop({ default: '' })
  @Expose()
  name?: string;
  @Prop({ default: '' })
  @Expose()
  intro?: string;
  @Prop({ default: '' })
  @Expose()
  image?: string;
  @Prop({ default: '' })
  @Expose()
  blurHash?: string;
  @Prop({ default: [] })
  @Expose()
  member?: Array<string>;
  @Prop({ default: DFStatus.Active })
  @Expose()
  status?: number;
  @Prop({ RegExp: /^[A-Fa-f0-9]{24}$/ })
  @Expose()
  createdBy: string;

  static get model(): ModelType<Classes> {
    return new Classes().getModelForClass(Classes, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Classes): InstanceType<Classes> {
    return new this.model(payload);
  }
}
