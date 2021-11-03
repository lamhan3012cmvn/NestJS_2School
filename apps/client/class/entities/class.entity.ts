import {
  BaseModel,
  schemaOptions,
} from './../../../share/mongodb/baseModel.entity';
import { Prop } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class Classes extends BaseModel<Classes> {
  @prop()
  @Expose()
  private name?: string;
  @prop()
  @Expose()
  private intro?: string;
  @prop()
  @Expose()
  private topic?: string;
  @prop({ default: '' })
  @Expose()
  private image?: string;
  @prop({ default: '' })
  @Expose()
  private blurHash?: string;
  // @prop({ default: [] })
  // @Expose()
  // member?: Array<string>;
  @prop({ default: DFStatus.Active })
  @Expose()
  private status?: number;
  @prop()
  @Expose()
  private createdBy: string;

  static get model(): ModelType<Classes> {
    return new Classes().getModelForClass(Classes, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Classes): InstanceType<Classes> {
    const result = new this.model(payload);
    return result;
  }
}
