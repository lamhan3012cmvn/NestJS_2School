import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateImageDto {
  @IsNotEmpty()
  @IsString()
  image: string;
  @IsNotEmpty()
  @IsString()
  blurHash: string;
}
