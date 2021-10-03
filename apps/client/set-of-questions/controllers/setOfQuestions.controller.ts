import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
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
import { UpdateRoadMap } from 'apps/client/road-map/dto/UpdateRoadMap/res.dto';
import { CreateSetOfQuestionDto } from '../dto/CreateSetOfQuestion/req.dto';
import { UpdateSetOfQuestionDto } from '../dto/UpdateSetOfQuestion/req.dto';

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

  @Patch()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async updateSetOfQuestions(
    @Usr() user: User,
    @Query() query,
    @Body() payload: UpdateSetOfQuestionDto,
  ) {
    try {
      console.log(query);
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
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'Delete-SetOfQuestionsController',
      );
      throw new Error2SchoolException(e.message);
    }
  }
}
