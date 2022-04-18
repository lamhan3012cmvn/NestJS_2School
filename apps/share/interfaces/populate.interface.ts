export interface IPopulateMongoose {
  path?: string;
  select?: string;
  match?: any;
  populate?: Array<IPopulateMongoose> | IPopulateMongoose | string;
}

export type IPopulate = Array<IPopulateMongoose> | IPopulateMongoose | string;
