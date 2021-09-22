import { Prop } from '@nestjs/mongoose';
import { regexpObjectId } from './RegExp';

export class CreateBy {
  @Prop({ RegExp: regexpObjectId })
  createdBy: string;
}
