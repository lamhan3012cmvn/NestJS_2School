import { IsNotEmpty, IsString } from 'class-validator';

export class JoinClassQuery {
  @IsNotEmpty()
  @IsString()
  idClass: string;

  @IsString()
  content: string;

  @IsString()
  amount: string;
}
