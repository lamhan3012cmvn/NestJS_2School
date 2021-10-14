import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsNotEmpty()
  @IsString()
  private intro: string;
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('VN')
  private phone: string;
}
