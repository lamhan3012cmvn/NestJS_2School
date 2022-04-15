import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  intro: string;
  @IsNotEmpty()
  @IsString()
  topic: string;
  @IsNumber()
  price: number;
}
