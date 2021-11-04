import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRMCAttendanceDto {
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

export interface IUpdateRMCAttendance {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
}
