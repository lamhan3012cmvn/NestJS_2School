import { Test, TestingModule } from '@nestjs/testing';
import { RoadMapContentController } from './roadMapContent.controller';
import { RoadMapContentService } from '../services/roadMapContent.service';

describe('RoadMapContentController', () => {
  let controller: RoadMapContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadMapContentController],
      providers: [RoadMapContentService],
    }).compile();

    controller = module.get<RoadMapContentController>(RoadMapContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
