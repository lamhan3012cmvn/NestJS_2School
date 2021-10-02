import { Test, TestingModule } from '@nestjs/testing';
import { RoadMapContentService } from './roadMapContent.service';

describe('RoadMapContentService', () => {
  let service: RoadMapContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoadMapContentService],
    }).compile();

    service = module.get<RoadMapContentService>(RoadMapContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
