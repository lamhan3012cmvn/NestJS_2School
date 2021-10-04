import { IsNotEmpty, IsString } from 'class-validator';

export class QueryGetSetOfQuestion {
  @IsNotEmpty()
  @IsString()
  classId: string;
  @IsNotEmpty()
  @IsString()
  status: string;
}
