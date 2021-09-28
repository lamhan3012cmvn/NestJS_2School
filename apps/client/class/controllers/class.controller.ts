import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  BadRequestException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ClassService } from '../services/class.service';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { UpdateClassDto } from '../dto/updateClass/update-class.dto';
import {
  ApiBaseResponse,
  BaseController,
} from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { Request } from 'express';
import { User } from 'apps/client/user/entities/user.entity';

@Controller('api/classes')
export class ClassController extends BaseController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly classService: ClassService,
  ) {
    super();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Usr() user: User, @Body() createClassDto: CreateClassDto) {
    try {
      const result = await this.classService.createClasses(
        user.createdBy,
        createClassDto,
      );
      this.resApi(result, 'Create Class success');
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      return new ApiBaseResponse(500);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Usr() user: User) {
    console.log(
      `LHA:  ===> file: class.controller.ts ===> line 52 ===> user`,
      user,
    );
    return 'Ken';
  }
}
