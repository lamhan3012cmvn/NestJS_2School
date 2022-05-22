import { BaseModel } from 'apps/share/mongodb/baseModel.entity';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { InstanceType, ModelType, prop } from 'typegoose';
import { schemaOptions } from '../../../share/mongodb/baseModel.entity';

export enum DFStatusTransaction {
  Active = 1,
  DeActive = 0,
  Delete = -1,
}


export class Transaction extends BaseModel<Transaction> {
  @prop({ required: true, ref: 'Classes' })
  @Expose()
  class: ObjectId;
  
  @prop({ required: true, ref: 'User' })
  @Expose()
  sender: ObjectId;

  @prop({ required: true, ref: 'User' })
  @Expose()
  receiver: ObjectId;

  @prop({ default: DFStatusTransaction.Active })
  @Expose()
  status: number;

  @prop({  default:null })
  @Expose()
  content: string;


  @prop({ required: true })
  @Expose()
  systemContent: string;


  @prop({ default: null })
  @Expose()
  senderPhone: string;

  @prop({ default:null })
  @Expose()
  amount: string;

  static get model(): ModelType<Transaction> {
    return new Transaction().getModelForClass(Transaction, {
      schemaOptions,
    });
  }

  static get modelName(): string {
    return this.model.modelName;
  }

  static createModel(payload: Transaction): InstanceType<Transaction> {
    return new this.model(payload);
  }
}
