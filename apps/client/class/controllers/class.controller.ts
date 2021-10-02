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
  Query,
} from '@nestjs/common';
import { ClassService } from '../services/class.service';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { UpdateClassDto } from '../dto/updateClass/update-class.dto';
import {
  ApiBaseResponse,
  BaseController,
  Ok,
} from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { Request } from 'express';
import { User } from 'apps/client/user/entities/user.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { DFStatus } from 'apps/share/enums/status.enum';

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
      if (result) {
        return new Ok('Create Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      return new ApiBaseResponse(500);
    }
  }
  @Post()
  @UseGuards(JwtAuthGuard)
  async update(
    @Usr() user: User,
    @Query() query,
    @Body() updateClassDto: UpdateClassDto,
  ) {
    try {
      const result = await this.classService.findOneAndUpdate(
        { createdBy: user.createdBy, _id: query.id },
        updateClassDto,
      );
      if (result) {
        return new Ok('Update Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Update-ClassController');
      return new ApiBaseResponse(500);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Usr() user: User) {
    try {
      const result = await this.classService.findAllClasses(user, {
        limit: '15',
        skip: '0',
      });
      if (result) {
        return new Ok('Get Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      return new ApiBaseResponse(500);
    }
  }

  @Get('changeStatus')
  @UseGuards(JwtAuthGuard)
  async changeStatusClass(@Usr() user: User, @Query() query) {
    try {
      const result = await this.classService.update(query.id, {
        status: DFStatus[DFStatus[query?.status || 0]],
      });
      if (result) {
        return new Ok('Get Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'changeStatus-ClassController');
      return new ApiBaseResponse(500);
    }
  }
}
