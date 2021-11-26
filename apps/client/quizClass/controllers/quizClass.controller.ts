import {
  Controller,
  Get,
  Header,
  HttpCode,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { Ok } from 'apps/share/controller/baseController';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { LoggerService } from 'apps/share/services/logger.service';
import { Usr } from './../../authentication/decorator/user.decorator';
import { QuizClassService } from './../services/quizClass.service';

@Controller('api/quiz-class')
export class QuizClassController {
  constructor(
    private readonly _quizClassService: QuizClassService,
    private readonly loggerService: LoggerService,
  ) {}
  @Get('history')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async getHistory(@Usr() user: User, @Query() query: { idClass: string }) {
    try {
      const result = await this._quizClassService.getHistory(query.idClass);

      // const result = await this.questionService.createQuestion(
      //   user.createdBy,
      //   payload,
      // );
      // if (result) {
      //   return new Ok('Create Question success', result);
      // }
      // throw new ResourceFoundException();
      return new Ok('Create Question success', result);
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'create-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }
}
