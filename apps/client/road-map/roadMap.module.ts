import { Module } from '@nestjs/common';
import { RoadMapService } from './services/roadMap.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadMap } from './entities/road-map.entity';
import { RoadMapController } from './controllers/roadMap.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RoadMap.modelName, schema: RoadMap.model.schema },
    ]),
  ],
  controllers: [RoadMapController],
  providers: [RoadMapService],
})
export class RoadMapModule {}
