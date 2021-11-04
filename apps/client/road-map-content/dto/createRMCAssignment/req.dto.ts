import { IsNotEmpty, IsString } from 'class-validator';

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
}

export interface ICreateRMCAssignment {
  description: string;
  startTime: string;
  endTime: string;
  name: string;
  createdBy: string;
  idRoadMap: string;
  type: number;
}
