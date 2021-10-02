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
  name?: string;
  @prop()
  @Expose()
  intro?: string;
  @prop()
  @Expose()
  topic?: string;
  @prop({ default: '' })
  @Expose()
  image?: string;
  @prop({ default: '' })
  @Expose()
  blurHash?: string;
  @prop({ default: [] })
  @Expose()
  member?: Array<string>;
  @prop({ default: DFStatus.Active })
  @Expose()
  status?: number;
  @prop()
  @Expose()
  createdBy: string;

  static get model(): ModelType<Classes> {
    return new Classes().getModelForClass(Classes, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Classes): InstanceType<Classes> {
    console.log(
      `LHA:  ===> file: class.entity.ts ===> line 45 ===> payload`,
      payload,
    );
    console.log(this.model);
    const result = new this.model(payload);
    console.log(
      `LHA:  ===> file: class.entity.ts ===> line 50 ===> result`,
      result,
    );
    return result;
  }
}
