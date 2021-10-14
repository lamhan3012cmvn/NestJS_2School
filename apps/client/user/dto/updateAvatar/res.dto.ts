import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAvatarDto {
  @IsNotEmpty()
  @IsString()
  private image: string;
  @IsNotEmpty()
  @IsString()
  private blurHash: string;
}
