import { Module } from '@nestjs/common';
import { RoadMapService } from './road-map.service';
import { RoadMapController } from './road-map.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadMap, RoadMapSchema } from './entities/road-map.entity';
import {
  RoadMapContent,
  RoadMapContentSchema,
} from './entities/road-map-content.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RoadMap.name, schema: RoadMapSchema },
      { name: RoadMapContent.name, schema: RoadMapContentSchema },
    ]),
  ],
  controllers: [RoadMapController],
  providers: [RoadMapService],
})
export class RoadMapModule {}
