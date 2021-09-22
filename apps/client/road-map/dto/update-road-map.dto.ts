import { PartialType } from '@nestjs/mapped-types';
import { CreateRoadMapDto } from './create-road-map.dto';

export class UpdateRoadMapDto extends PartialType(CreateRoadMapDto) {}
