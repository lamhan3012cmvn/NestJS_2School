import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRoadMap {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
