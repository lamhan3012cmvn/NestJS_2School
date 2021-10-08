import {
  BaseModel,
  schemaOptions,
} from '../../../share/mongodb/baseModel.entity';
import { Prop } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

export class MemberClasses extends BaseModel<MemberClasses> {
  @prop()
  @Expose()
  idUser?: string;
  @prop()
  @Expose()
  idClass?: string;
  @prop({ default: 0 })
  @Expose()
  role?: number;
  @prop({ default: DFStatus.Active })
  @Expose()
  status?: number;

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
