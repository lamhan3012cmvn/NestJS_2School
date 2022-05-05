import { DFStatus } from 'apps/share/enums/status.enum';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { InstanceType, ModelType, prop } from 'typegoose';
import {
  BaseModel,
  schemaOptions,
} from '../../../share/mongodb/baseModel.entity';

export class MemberClasses extends BaseModel<MemberClasses> {
  @prop({ required: true, ref: 'User' })
  @Expose()
  user: ObjectId;
  @prop({ required: true, ref: 'Classes' })
  @Expose()
  idClass: ObjectId;
  @prop({ default: 0 })
  @Expose()
  role: number;
  @prop({ default: DFStatus.Active })
  @Expose()
  status: number;

  static get model(): ModelType<MemberClasses> {
    return new MemberClasses().getModelForClass(MemberClasses, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: MemberClasses): InstanceType<MemberClasses> {
    const result = new this.model(payload);
    return result;
  }
}
