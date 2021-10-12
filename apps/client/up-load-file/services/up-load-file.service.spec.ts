import { Test, TestingModule } from '@nestjs/testing';
import { UpLoadFileService } from './up-load-file.service';

describe('UpLoadFileService', () => {
  let service: UpLoadFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpLoadFileService],
    }).compile();

    service = module.get<UpLoadFileService>(UpLoadFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
