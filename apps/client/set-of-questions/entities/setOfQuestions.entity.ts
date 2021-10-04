import { schemaOptions } from './../../../share/mongodb/baseModel.entity';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class SetOfQuestion extends BaseModel<SetOfQuestion> {
  @prop({ default: '' })
  @Expose()
  name: string;
  @prop({ default: '' })
  @Expose()
  description: string;
  @prop({ default: DFStatus.Active })
  @Expose()
  status: number;
  @prop({ default: 0 })
  @Expose()
  usedTimes: number;
  @prop({ default: '' })
  @Expose()
  classBy: string;
  @prop({ default: '' })
  @Expose()
  createBy: string;

  static get model(): ModelType<SetOfQuestion> {
    return new SetOfQuestion().getModelForClass(SetOfQuestion, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: SetOfQuestion): InstanceType<SetOfQuestion> {
    return new this.model(payload);
  }
}
