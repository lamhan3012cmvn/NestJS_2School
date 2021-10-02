import { Controller } from '@nestjs/common';
import { SetOfQuestionsService } from '../services/setOfQuestions.service';

@Controller('set-of-questions')
export class SetOfQuestionsController {
  constructor(private readonly _setOfQuestionsService: SetOfQuestionsService) {}
}
