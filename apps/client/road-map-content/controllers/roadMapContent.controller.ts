import { Controller } from '@nestjs/common';
import { RoadMapContentService } from '../services/roadMapContent.service';

@Controller('road-map-content')
export class RoadMapContentController {
  constructor(private readonly roadMapContentService: RoadMapContentService) {}
}
