import { IsString } from 'class-validator';

export class UpdateAccountDto {
  verify?: boolean;
  password?: string;
}
