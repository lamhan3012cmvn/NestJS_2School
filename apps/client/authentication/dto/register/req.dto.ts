import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthenticationDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
