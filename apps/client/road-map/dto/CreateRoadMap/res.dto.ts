import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoadMapDto {
  @IsNotEmpty()
  @IsString()
  private name: string;
  @IsNotEmpty()
  @IsString()
  private description: string;
}
