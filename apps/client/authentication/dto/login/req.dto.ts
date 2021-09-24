import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class LoginAuthenticationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'Not Empty' })
  username: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: 'string', description: 'Not Empty' })
  password: string;
}
