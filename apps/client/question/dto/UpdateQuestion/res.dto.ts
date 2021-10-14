import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @IsNotEmpty()
  @IsString()
  private name: string;
  @IsNotEmpty()
  @IsString()
  private intro: string;
  @IsNotEmpty()
  @IsString()
  private topic: string;
}
