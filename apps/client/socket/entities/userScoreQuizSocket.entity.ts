import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ModelType, InstanceType, prop } from 'typegoose';
export class UserScoreQuizSocket extends BaseModel<UserScoreQuizSocket> {
  @prop({ default: '' })
  @Expose()
  idRoom: string;
  @prop({ default: '' })
  @Expose()
  userId: string;
  @prop({ default: 0 })
  @Expose()
  score: number;
  @prop({ default: '' })
  @Expose()
  question: string;

  static get model(): ModelType<UserScoreQuizSocket> {
    return new UserScoreQuizSocket().getModelForClass(UserScoreQuizSocket, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(
    payload: UserScoreQuizSocket,
  ): InstanceType<UserScoreQuizSocket> {
    return new this.model(payload);
  }
}
