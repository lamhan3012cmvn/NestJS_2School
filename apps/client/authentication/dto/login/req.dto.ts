import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class LoginAuthenticationDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
