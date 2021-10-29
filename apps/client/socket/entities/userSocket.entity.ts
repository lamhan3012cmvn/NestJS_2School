import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop, index } from 'typegoose';
import { User } from 'apps/client/user/entities/user.entity';

@index({ idRoom: 1, userId: 1 }, { unique: true }) // compound index
export class UserMemberSocket extends BaseModel<UserMemberSocket> {
  @prop({ default: '' })
  @Expose()
  idRoom: string;
  @prop({ default: '' })
  @Expose()
  userId: string;
  @prop({ default: null })
  @Expose()
  user: User;

  static get model(): ModelType<UserMemberSocket> {
    return new UserMemberSocket().getModelForClass(UserMemberSocket, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(
    payload: UserMemberSocket,
  ): InstanceType<UserMemberSocket> {
    return new this.model(payload);
  }
}
