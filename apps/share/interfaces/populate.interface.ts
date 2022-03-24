export interface IPopulateMongoose {
  path: string;
  select?: string;
  match?: any;
}

export type IPopulate = Array<IPopulateMongoose> | string;
