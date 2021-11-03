import { Usr } from './../../authentication/decorator/user.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { QuestionService } from '../services/question.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { Ok } from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';
import { query } from 'winston';
import { CreateQuestionDto } from '../dto/CreateQuestion/res.dto';

@Controller('api/question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly loggerService: LoggerService,
  ) {}
  @Post()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async createQuestion(@Usr() user: User, @Body() payload: CreateQuestionDto) {
    try {
      const result = await this.questionService.createQuestion(
        user.createdBy,
        payload,
      );
      if (result) {
        return new Ok('Create Question success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'create-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async updateQuestion(
    @Usr() user: User,
    @Query() query,
    @Body() payload: any,
  ) {
    try {
      const result = await this.questionService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        payload,
      );
      if (result) {
        return new Ok(
          'Create Class success',
          this.questionService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async getQuestionBySetOf(@Usr() user: User, @Query() query) {
    try {
      const result = await this.questionService.findAll({
        createBy: user.createdBy,
        idSetOfQuestions: query.idSetOfQuestions,
      });
      const sortData = result.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      if (sortData) {
        return new Ok(
          'Create Question success',
          this.questionService.cvtJSON(sortData),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }
}
