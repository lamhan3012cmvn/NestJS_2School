import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateRMCAssignmentDto {
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

export interface ICreateRMCAssignment {
  description: string;
  startTime: string;
  endTime: string;
  name: string;
  createdBy: string;
  idRoadMap: string;
  type: number;
  idClass: string;
  fileExtensions: Array<string>;
}
