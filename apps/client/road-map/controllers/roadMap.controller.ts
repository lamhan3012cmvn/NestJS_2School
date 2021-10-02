import { RoadMapService } from './../services/roadMap.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('road-map')
export class RoadMapController {
  constructor(private readonly roadMapService: RoadMapService) {}
}
