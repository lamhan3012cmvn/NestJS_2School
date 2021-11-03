import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';

export class RMCAssignmentUser extends BaseModel<RMCAssignmentUser> {
  @prop({ required: true })
  userId: string;
  @prop({ required: true })
  assignmentId: string;

  @prop({ default: null })
  score: number;

  @prop({ default: [] })
  commentTeacher: Array<string>;

  // @prop({ required: true })
  // assignmentId: string;

  static get model(): ModelType<RMCAssignmentUser> {
    return new RMCAssignmentUser().getModelForClass(RMCAssignmentUser, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(
    payload: RMCAssignmentUser,
  ): InstanceType<RMCAssignmentUser> {
    return new this.model(payload);
  }
}
