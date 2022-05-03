import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UpdateRMCAssignmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  startTime: string;
  @IsNotEmpty()
  @IsString()
  endTime: string;
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(6)
  @Type(() => String)
  fileExtensions: Array<string>;
}

export interface IUpdateRMCAssignment {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  fileExtensions: Array<string>;
}
