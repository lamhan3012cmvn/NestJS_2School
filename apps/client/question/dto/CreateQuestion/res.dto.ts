import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  private question: string;
  @IsNotEmpty()
  @IsString()
  private idSetOfQuestions: string;
  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(6)
  private answers: Array<string>;
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(6)
  private correct: Array<number>;
  @IsInt()
  @Min(10)
  @Max(120)
  private duration: number;
}
