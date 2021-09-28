import { SchemaOptions } from 'mongoose';
import { Typegoose, prop } from 'typegoose';
import { Expose } from 'class-transformer';

export class BaseModelVm {
  @Expose()
  createdAt?: Date;

  @Expose()
  updatedAt?: Date;

  @Expose()
  id?: string;
}

export abstract class BaseModel<T> extends Typegoose {
  @prop()
  @Expose()
  createdAt: Date;

  @prop()
  @Expose()
  updatedAt: Date;

  @Expose()
  _id: string;
}

export const schemaOptions: SchemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    getters: true,
  },
};
