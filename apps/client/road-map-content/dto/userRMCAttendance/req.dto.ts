import { IsNotEmpty, IsString } from 'class-validator';

export class UserRMCAttendanceDto {
  @IsNotEmpty()
  @IsString()
  rmc: string;
  @IsNotEmpty()
  @IsString()
  idClass: string;
}

export interface IUserRMCAttendance {
  rmc: string;
  idClass: string;
}
