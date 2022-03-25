export interface IPopulateMongoose {
  path: string;
  select?: string;
  match?: any;
  populate?: IPopulateMongoose;
}

export type IPopulate = Array<IPopulateMongoose> | IPopulateMongoose | string;
