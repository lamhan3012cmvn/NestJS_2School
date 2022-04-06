import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { LoggerService } from 'apps/share/services/logger.service';
import { SetOfQuestionsService } from '../services/setOfQuestions.service';
import { Ok } from 'apps/share/controller/baseController';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { User } from 'apps/client/user/entities/user.entity';
import { CreateSetOfQuestionDto } from '../dto/CreateSetOfQuestion/req.dto';
import { UpdateSetOfQuestionDto } from '../dto/UpdateSetOfQuestion/req.dto';
import { QueryGetSetOfQuestion } from '../dto/GetSetOfQuestion/query.dto';
import { CreateMultiQuestion } from '../dto/CreateMultiQuestion/req.dto';
import { CreateSetOfQuestionShareDto } from '../dto/CreateSetOfQuestionShare/req.dto';

@Controller('api/set-of-questions')
export class SetOfQuestionsController {
  constructor(
    private readonly _setOfQuestionsService: SetOfQuestionsService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createSetOfQuestions(
    @Usr() user: User,
    @Body() payload: CreateSetOfQuestionDto,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestions(
        user.createdBy,
        payload,
      );
      if (result) {
        return new Ok(
          'Create SetOfQuestions success',
          this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'create-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('excels')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createSetOfQuestionsExcel(
    @Usr() user: User,
    @Query() query,
    @Body() payload: CreateMultiQuestion,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestionExcel(
        user.createdBy,
        query.idSetOfQuestion,
        payload,
      );
      if (result) {
        return new Ok(
          'Create SetOfQuestions success',
          result,
          // this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'create-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('share')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createSetOfQuestionsShare(
    @Usr() user: User,
    @Body() payload: CreateSetOfQuestionShareDto,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestions(
        user.createdBy,
        { ...payload, type: 1 },
      );
      if (result) {
        return new Ok(
          'Create SetOfQuestions success',
          this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'create-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('share/excels')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createSetOfQuestionsExcelShare(
    @Usr() user: User,
    @Query() query,
    @Body() payload: CreateMultiQuestion,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestionExcel(
        user.createdBy,
        query.idSetOfQuestion,
        payload,
      );
      if (result) {
        return new Ok(
          'Create SetOfQuestions success',
          result,
          // this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'create-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async updateSetOfQuestions(
    @Usr() user: User,
    @Query() query,
    @Body() payload: UpdateSetOfQuestionDto,
  ) {
    try {
      const result = await this._setOfQuestionsService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        payload,
      );
      if (result) {
        return new Ok(
          'Update SetOfQuestions success',
          this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(
        e.message,
        null,
        'update-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async changeSetOfQuestions(@Usr() user: User, @Query() query) {
    try {
      const result = await this._setOfQuestionsService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        { status: ~~query.status },
      );
      if (result) {
        return new Ok(
          'Delete SetOfQuestions success',
          this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException('Dont find Set Of Question');
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'Delete-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getSetOfQuestions(
    @Usr() user: User,
    @Query() query: QueryGetSetOfQuestion,
  ) {
    try {
      const result = await this._setOfQuestionsService.findAll({
        createBy: user.createdBy,
        classBy: query.classId,
        status: query.status,
      });
      if (result) {
        return new Ok(
          'Get SetOfQuestions success',
          this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Get-SetOfQuestionsController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('share')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getSetOfQuestionsShare(@Usr() user: User) {
    try {
      const result = await this._setOfQuestionsService.findAll({
        createBy: user.createdBy,
        type: 1,
      });
      if (result) {
        return new Ok(
          'Get SetOfQuestions success',
          this._setOfQuestionsService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Get-SetOfQuestionsController');
      throw new Error2SchoolException(e.message);
    }
  }
}
