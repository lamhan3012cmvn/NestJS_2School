import { Test, TestingModule } from '@nestjs/testing';
import { SetOfQuestionsService } from './setOfQuestions.service';

describe('SetOfQuestionsService', () => {
  let service: SetOfQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetOfQuestionsService],
    }).compile();

    service = module.get<SetOfQuestionsService>(SetOfQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
