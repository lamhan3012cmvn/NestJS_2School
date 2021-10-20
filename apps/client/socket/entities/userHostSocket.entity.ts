import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop, index } from 'typegoose';

@index({ idRoom: 1, host: 1 }, { unique: true }) // compound index
export class UserHostSocket extends BaseModel<UserHostSocket> {
  @prop({ default: '' })
  @Expose()
  idRoom: string;
  @prop({ default: '' })
  @Expose()
  host: string;
  @prop({ default: [] })
  @Expose()
  questions: Array<string>;
  @prop({ default: -1 })
  @Expose()
  currentQuestion: number;
  static get model(): ModelType<UserHostSocket> {
    return new UserHostSocket().getModelForClass(UserHostSocket, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: UserHostSocket): InstanceType<UserHostSocket> {
    return new this.model(payload);
  }
}
