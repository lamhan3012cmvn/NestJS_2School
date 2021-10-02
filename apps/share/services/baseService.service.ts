import { Types, UpdateQuery } from 'mongoose';
import { InstanceType, ModelType, Typegoose } from 'typegoose';
import { IQueryFind } from '../interfaces/query.interface';
// import { AutoMapper, Constructable } from 'automapper-nartc';

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
  ): Promise<InstanceType<T>[]> {
    return this._model
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(+query.skip)
      .limit(+query.limit)
      .exec();
  }

  async findOne(filter = {}): Promise<InstanceType<T>> {
    return this._model.findOne(filter).exec();
  }

  async findById(id: string): Promise<InstanceType<T>> {
    return this._model.findById(this.toObjectId(id)).exec();
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

  async update(
    id: string,
    item: UpdateQuery<InstanceType<T>>,
  ): Promise<InstanceType<T>> {
    return this._model
      .findByIdAndUpdate(this.toObjectId(id), item, {
        new: true,
      })
      .exec();
  }

  async clearCollection(filter = {}): Promise<{ ok?: number; n?: number }> {
    return this._model.deleteMany(filter).exec();
  }

  private toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId(id);
  }
  cvtJSON(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }
}
