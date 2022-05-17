import { ClassService } from './../../class/services/class.service';
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
    private readonly _classesService: ClassService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createSetOfQuestions(
    @Usr() user: User & { _id: string },
    @Body() payload: CreateSetOfQuestionDto,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestions(
        user._id,
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
    @Usr() user: User & { _id: string },
    @Query() query,
    @Body() payload: CreateMultiQuestion,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestionExcel(
        user._id,
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
    @Usr() user: User & { _id: string },
    @Body() payload: CreateSetOfQuestionShareDto,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestions(
        user._id,
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
    @Usr() user: User&{_id:string},
    @Query() query,
    @Body() payload: CreateMultiQuestion,
  ) {
    try {
      const result = await this._setOfQuestionsService.createSetOfQuestionExcel(
        user._id,
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
    @Usr() user:  User&{_id:string},
    @Query() query,
    @Body() payload: UpdateSetOfQuestionDto,
  ) {
    try {
      const result = await this._setOfQuestionsService.findOneAndUpdate(
        { createBy: user._id, _id: query.id },
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
  async changeSetOfQuestions(@Usr() user: User&{_id:string}, @Query() query) {
    try {
      const result = await this._setOfQuestionsService.findOneAndUpdate(
        { createBy: user._id, _id: query.id },
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
    @Usr() user: User&{_id:string},
    @Query() query: QueryGetSetOfQuestion,
  ) {
    try {
      const _class = await this._classesService.findOne({ _id: query.classId });
      let setOfQuestionShare = null;
      if (_class && _class.setOfQuestionShare) {
        setOfQuestionShare = await this._setOfQuestionsService.findAll({
          _id: { $in: _class.setOfQuestionShare },
        });
      }

      const result = await this._setOfQuestionsService.findAll({
        createBy: user._id,
        classBy: query.classId,
        status: query.status,
      });

      const res = setOfQuestionShare
        ? [
            ...this._setOfQuestionsService.cvtJSON(result),
            this._setOfQuestionsService.cvtJSON(setOfQuestionShare),
          ]
        : this._setOfQuestionsService.cvtJSON(result);

      if (res) {
        return new Ok('Get SetOfQuestions success', res);
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
  async getSetOfQuestionsShare(@Usr() user: User & { _id: string }) {
    try {
      const result = await this._setOfQuestionsService.findAll({
        createBy: user._id,
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
