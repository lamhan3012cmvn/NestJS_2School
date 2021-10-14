import { IsString } from 'class-validator';

export class UpdateAccountDto {
  private verify?: boolean;
  private password?: string;
}
