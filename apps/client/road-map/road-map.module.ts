import { Module } from '@nestjs/common';
import { RoadMapService } from './road-map.service';
import { RoadMapController } from './road-map.controller';

@Module({
  controllers: [RoadMapController],
  providers: [RoadMapService],
})
export class RoadMapModule {}
