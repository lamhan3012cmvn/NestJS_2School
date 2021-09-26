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
  intro: string;
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('VN')
  phone: string;
}
