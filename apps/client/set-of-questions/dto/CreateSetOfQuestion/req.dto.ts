import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSetOfQuestionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  classBy: string;
}
