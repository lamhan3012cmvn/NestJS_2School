import { Test, TestingModule } from '@nestjs/testing';
import { RoadMapController } from './roadMap.controller';
import { RoadMapService } from '../services/roadMap.service';

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
