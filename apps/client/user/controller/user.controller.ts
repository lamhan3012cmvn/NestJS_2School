import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import {
  ApiBaseResponse,
  BaseController,
  Ok,
} from '../../../share/controller/baseController';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { IQueryFind } from '../../../share/interfaces/query.interface';

import { UserService } from '../service/user.service';
import { LoggerService } from '../../../share/services/logger.service';
import { UpdateUserDto } from '../dto/updateUser/res.dto';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { User } from '../entities/user.entity';
import { UpdateAvatarDto } from '../dto/updateAvatar/res.dto';

@Controller('api/user')
export class UserController extends BaseController {
  constructor(
    private readonly userService: UserService,
    private readonly loggerService: LoggerService,
  ) {
    super();
  }

  @Get()
  async findAll(@Query() queries: IQueryFind) {
    try {
      const result = await this.userService.findAll(queries);
      return this.resApi(result, 'Get Users Success');
      // if (result) {
      //   return new Ok('Get Users Success', result);
      // }
      // return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'findAll-UserController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('info')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getUser(@Usr() user) {
    try {
      return new Ok('Get User Success', JSON.parse(JSON.stringify(user)));
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async update(@Usr() user: User, @Body() updateUserDto: UpdateUserDto) {
    try {
      const result = await this.userService.update(
        user.createdBy,
        updateUserDto,
      );
      if (result) {
        return new Ok('Get User Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'update-UserController');
      throw new Error2SchoolException(e.message);
    }
  }
  @Patch('avatar')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async updateAvatar(@Usr() user: User, @Body() payload: UpdateAvatarDto) {
    try {
      const result = await this.userService.updateAvatar(
        user.createdBy,
        payload,
      );
      if (result) {
        return new Ok('Get User Success', result);
      }
      throw new ResourceFoundException('Update Avatar Fail');
    } catch (e) {
      this.loggerService.error(e.message, null, 'update-UserController');
      throw new Error2SchoolException(e.message);
    }
  }
}
