import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthenticationDto } from './create-authentication.dto';

export class UpdateAuthenticationDto extends PartialType(
  CreateAuthenticationDto,
) {}
