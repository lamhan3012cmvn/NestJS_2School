import { IsNotEmpty, IsString } from 'class-validator';

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
}

export interface IUpdateRMCAssignment {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
}
