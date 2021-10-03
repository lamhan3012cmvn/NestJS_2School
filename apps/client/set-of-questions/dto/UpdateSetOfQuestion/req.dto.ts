import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSetOfQuestionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
