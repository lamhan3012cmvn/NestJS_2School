import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  question: string;
  @IsNotEmpty()
  @IsNumber()
  score: string;
  @IsNotEmpty()
  @IsString()
  idSetOfQuestions: string;
  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(6)
  answers: Array<string>;
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(6)
  correct: Array<number>;
  @IsInt()
  @Min(10)
  @Max(120)
  duration: number;
}
