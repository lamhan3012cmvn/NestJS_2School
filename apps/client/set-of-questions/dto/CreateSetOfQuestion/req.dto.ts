import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSetOfQuestionDto {
  @IsNotEmpty()
  @IsString()
  private name: string;
  @IsNotEmpty()
  @IsString()
  private description: string;
  @IsNotEmpty()
  @IsString()
  private classBy: string;
}
