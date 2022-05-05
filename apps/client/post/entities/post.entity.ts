import { schemaOptions } from '../../../share/mongodb/baseModel.entity';
import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { InstanceType, ModelType, prop } from 'typegoose';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class Post extends BaseModel<Post> {
  @prop({ required: true, ref: 'Classes' })
  @Expose()
  class: ObjectId;
  @prop({ ref: 'RoadMapContent', default: null })
  @Expose()
  roadMapContent: ObjectId;
  @prop({ default: '' })
  @Expose()
  content: string;
  @prop({ required: true, ref: 'like', default: [] })
  @Expose()
  like: Array<ObjectId>;

  // 0 an
  // -1 xoa
  // 1 hien
  @prop({ default: 1 })
  @Expose()
  status: number;
  @prop({ required: true, ref: 'User' })
  @Expose()
  createdBy: ObjectId;

  static get model(): ModelType<Post> {
    return new Post().getModelForClass(Post, { schemaOptions });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Post): InstanceType<Post> {
    return new this.model(payload);
  }
}
