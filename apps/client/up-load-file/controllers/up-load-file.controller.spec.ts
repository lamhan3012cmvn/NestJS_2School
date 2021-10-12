import { Test, TestingModule } from '@nestjs/testing';
import { UpLoadFileController } from './up-load-file.controller';

describe('UpLoadFileController', () => {
  let controller: UpLoadFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpLoadFileController],
    }).compile();

    controller = module.get<UpLoadFileController>(UpLoadFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
