import { Test, TestingModule } from '@nestjs/testing';
import { RoadMapService } from './roadMap.service';

describe('RoadMapService', () => {
  let service: RoadMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadMapService],
    }).compile();

    service = module.get<RoadMapService>(RoadMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
