import { Test, TestingModule } from '@nestjs/testing';
import { RoadMapController } from './road-map.controller';
import { RoadMapService } from './road-map.service';

describe('RoadMapController', () => {
  let controller: RoadMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadMapController],
      providers: [RoadMapService],
    }).compile();

    controller = module.get<RoadMapController>(RoadMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
