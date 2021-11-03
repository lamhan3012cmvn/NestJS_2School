import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';

export class RMCAttendancesUser extends BaseModel<RMCAttendancesUser> {
  @prop({ required: true })
  userId: string;
  @prop({ required: true })
  attendanceId: string;

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
