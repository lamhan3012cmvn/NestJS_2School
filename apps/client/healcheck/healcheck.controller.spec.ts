import { Test, TestingModule } from '@nestjs/testing';
import { HealcheckController } from './healcheck.controller';

describe('HealcheckController', () => {
  let controller: HealcheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealcheckController],
    }).compile();

    controller = module.get<HealcheckController>(HealcheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
