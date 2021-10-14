import { Test, TestingModule } from '@nestjs/testing';
import { QuizClassService } from './quizClass.service';

describe('SetOfQuestionsService', () => {
  let service: QuizClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizClassService],
    }).compile();

    service = module.get<QuizClassService>(QuizClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
