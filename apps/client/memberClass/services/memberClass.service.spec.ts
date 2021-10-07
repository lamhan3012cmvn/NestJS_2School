import { Test, TestingModule } from '@nestjs/testing';
import { MemberClassService } from './memberClass.service';

describe('MemberClassService', () => {
  let service: MemberClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberClassService],
    }).compile();

    service = module.get<MemberClassService>(MemberClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
