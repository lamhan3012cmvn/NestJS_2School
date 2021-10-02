import { Test, TestingModule } from '@nestjs/testing';
import { SetOfQuestionsService } from '../services/setOfQuestions.service';
import { SetOfQuestionsController } from './setOfQuestions.controller';

describe('SetOfQuestionsController', () => {
  let controller: SetOfQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetOfQuestionsController],
      providers: [SetOfQuestionsService],
    }).compile();

    controller = module.get<SetOfQuestionsController>(SetOfQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
