import { LoggerService } from './../../share/services/logger.service';
import { Module } from '@nestjs/common';
import { RoadMapContentService } from './services/roadMapContent.service';
import { RoadMapContentController } from './controllers/roadMapContent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadMapContent } from './entities/roadMapContent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RoadMapContent.modelName, schema: RoadMapContent.model.schema },
    ]),
  ],
  controllers: [RoadMapContentController],
  providers: [LoggerService, RoadMapContentService],
})
export class RoadMapContentModule {}
