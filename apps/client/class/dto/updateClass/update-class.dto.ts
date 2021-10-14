import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateClassDto } from '../createClass/create-class.dto';

export class UpdateClassDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  intro: string;
  @IsNotEmpty()
  @IsString()
  topic: string;
  @IsNotEmpty()
  @IsString()
  image: string;
  @IsNotEmpty()
  @IsString()
  blurHash: string;
}
