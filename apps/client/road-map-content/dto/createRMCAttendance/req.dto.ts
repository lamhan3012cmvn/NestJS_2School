import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRMCAttendanceDto {
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

export interface ICreateRMCAttendance {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  createdBy: string;
  idRoadMap: string;
  type: number;
}
