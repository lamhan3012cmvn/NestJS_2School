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
import { ISchemaUser, User } from 'apps/client/user/entities/user.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { DFStatus } from 'apps/share/enums/status.enum';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { JoinClassQuery } from '../dto/joinClass/query.dto';
import { UpdateImageDto } from '../dto/updateImage/req,dto';
import { HostName } from 'apps/share/decorator/host.decorator';

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
      throw new Error2SchoolException(e.message);
    }
  }
  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(@Usr() user: User, @Query() query, @Body() updateClassDto: any) {
    try {
      console.log(
        `LHA:  ===> file: class.controller.ts ===> line 66 ===> updateClassDto`,
        updateClassDto,
      );
      const result = await this.classService.findOneAndUpdate(
        { createdBy: user.createdBy, _id: query.id },
        updateClassDto,
      );
      if (result) {
        return new Ok(
          'Update Class success',
          this.classService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Update-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch('image')
  @UseGuards(JwtAuthGuard)
  async updateImage(
    @Usr() user: User,
    @Query() query,
    @Body() updateClassDto: UpdateImageDto,
  ) {
    try {
      const result = await this.classService.findOneAndUpdate(
        { createdBy: user.createdBy, _id: query.id },
        updateClassDto,
      );
      if (result) {
        return new Ok(
          'Update Class success',
          this.classService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Update-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@HostName() host, @Usr() user: User) {
    try {
      console.log(host);
      const result = await this.classService.findAllClasses(
        user,
        {
          limit: '15',
          skip: '0',
        },
        host,
      );
      if (result) {
        return new Ok('Get Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
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
      throw new ResourceFoundException('Change Status False');
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'changeStatus-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('joinMember')
  @UseGuards(JwtAuthGuard)
  async joinMemberClass(
    @Usr() user: ISchemaUser,
    @Body() payload: JoinClassQuery,
  ) {
    try {
      const result = await this.classService.joinMemberClass(
        user.createdBy,
        payload.idClass,
      );
      if (result) {
        return new Ok('Join Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'joinMember-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }
  @Delete('leaveClass')
  @UseGuards(JwtAuthGuard)
  async leaveClass(@Usr() user: ISchemaUser, @Query() payload: JoinClassQuery) {
    try {
      const result: boolean = await this.classService.leaveMemberClass(
        user.createdBy,
        payload.idClass,
      );
      if (result) {
        return new Ok('Leave Class success', this.classService.cvtJSON(result));
      } else {
        return new Ok(
          'Dont Find Member Leave success',
          this.classService.cvtJSON(result),
        );
      }
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'Leave-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('recommendClasses')
  @UseGuards(JwtAuthGuard)
  async recommendClasses(
    @Usr() user: ISchemaUser,
    // @Body() payload: JoinClassQuery,
  ) {
    try {
      const result = await this.classService.recommendClasses(user.createdBy);
      if (result) {
        return new Ok('Join Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'joinMember-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }
}
// recommendClasses
