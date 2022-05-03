import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { index, InstanceType, ModelType, prop } from 'typegoose';
import { ObjectId } from 'mongoose';

@index({ user: 1, rmc: 1 }, { unique: true }) // compound index
export class RMCAttendancesUser extends BaseModel<RMCAttendancesUser> {
  @prop({ required: true, ref: 'User' })
  user: ObjectId;
  @prop({ required: true, ref: 'RoadMapContent' })
  rmc: ObjectId;
  //-1 Vang
  // 1 Co Mat
  @prop({ default: 1 })
  status: number;

  static get model(): ModelType<RMCAttendancesUser> {
    return new RMCAttendancesUser().getModelForClass(RMCAttendancesUser, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(
    payload: RMCAttendancesUser,
  ): InstanceType<RMCAttendancesUser> {
    return new this.model(payload);
  }
}
