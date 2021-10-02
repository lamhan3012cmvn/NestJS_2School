import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from '../createClass/create-class.dto';

export class UpdateClassDto {
  name?: string;
  intro?: string;
  topic?: string;
  image?: string;
  blurHash?: string;
  member?: Array<string>;
}
