import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  intro: string;
  @IsNotEmpty()
  @IsString()
  topic: string;
}
