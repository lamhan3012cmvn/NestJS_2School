import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoadMapDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
