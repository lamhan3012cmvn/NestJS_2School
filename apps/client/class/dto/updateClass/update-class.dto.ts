import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from '../createClass/create-class.dto';

export class UpdateClassDto extends PartialType(CreateClassDto) {}
