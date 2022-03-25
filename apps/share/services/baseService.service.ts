import { IPopulate } from './../interfaces/populate.interface';
import { UpdateQuery } from 'mongoose';
import { InstanceType, ModelType, Typegoose } from 'typegoose';
import { IQueryFind } from '../interfaces/query.interface';
// import { AutoMapper, Constructable } from 'automapper-nartc';
import * as mongoose from 'mongoose';

export abstract class BaseService<T extends Typegoose> {
  protected _model: ModelType<T>;
  // protected _mapper: AutoMapper;

  private get modelName(): string {
    return this._model.modelName;
  }

  // private get viewModelName(): string {
  //   return `${this._model.modelName}Vm`;
  // }

  // async map<T, K>(
  //   object: Partial<InstanceType<T>>,
  //   source: Constructable<T>,
  //   destination: Constructable<K>,
  // ): Promise<K> {
  //   return this._mapper.map<T, K>(object as T, source, destination);
  // }

  // async mapArray<T, K>(
  //   object: Array<Partial<InstanceType<T>>>,
  //   source: Constructable<T>,
  //   destination: Constructable<K>,
  // ): Promise<K[]> {
  //   return this._mapper.mapArray<T, K>(object as T[], source, destination);
  // }

  async findAll(
    filter = {},
    query: IQueryFind = { skip: '0', limit: '15' },
    populate: IPopulate = [],
  ): Promise<InstanceType<T>[]> {
    return this._model
      .find(filter)
      .populate(populate)
      .sort({ createdAt: -1 })
      .skip(+query.skip)
      .limit(+query.limit)
      .lean();
  }

  async findOne(filter = {}): Promise<InstanceType<T>> {
    return this._model.findOne(filter).exec();
  }

  async findById(
    id: string,
    populate: IPopulate = [],
  ): Promise<InstanceType<T>> {
    return this._model.findById(this.toObjectId(id)).populate(populate).lean();
  }

  async create(item: InstanceType<T>): Promise<InstanceType<T>> {
    console.log('create', item);
    try {
      return this._model.create(item);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async delete(id: string): Promise<InstanceType<T>> {
    return this._model.findByIdAndRemove(this.toObjectId(id)).exec();
  }

  // async findOneAndDelete(obj: any): Promise<InstanceType<T>> {
  //   return this._model.findOneAndRemove(obj).exec();
  // }

  async update(
    id: string,
    item: UpdateQuery<InstanceType<T>>,
  ): Promise<InstanceType<T>> {
    try {
      return this._model
        .findByIdAndUpdate(this.toObjectId(id), item, {
          new: true,
        })
        .exec();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async findOneAndUpdate(
    query: any,
    item: UpdateQuery<InstanceType<T>>,
  ): Promise<InstanceType<T>> {
    try {
      return this._model
        .findOneAndUpdate(query, item, {
          new: true,
        })
        .exec();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async clearCollection(filter = {}): Promise<{ ok?: number; n?: number }> {
    return this._model.deleteMany(filter).exec();
  }

  protected toObjectId(id: string): any {
    return new mongoose.Types.ObjectId(id);
  }
  cvtJSON(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }
}
