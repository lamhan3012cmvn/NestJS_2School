import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

class SetOfQuestionDto {
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

class QuestionDto {
  @IsNotEmpty()
  @IsString()
  question: string;
  @IsArray()
  // @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @ArrayMaxSize(6)
  @Type(() => String)
  answers: string[];
  @IsArray()
  // @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(6)
  @Type(() => Number)
  correct: number[];
  @IsNotEmpty()
  @IsNumber()
  score: number;
  @IsNotEmpty()
  @IsNumber()
  duration: number;
}

export class CreateMultiQuestion {
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions: Array<QuestionDto>;
}
