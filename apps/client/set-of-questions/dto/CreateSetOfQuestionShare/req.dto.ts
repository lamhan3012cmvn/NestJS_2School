import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSetOfQuestionShareDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
