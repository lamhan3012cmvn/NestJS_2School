import {
  Body,
  Controller,
  Get,
  HttpCode,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { BaseController, Ok } from '../../../share/controller/baseController';
import { IQueryFind } from '../../../share/interfaces/query.interface';
import { LoggerService } from '../../../share/services/logger.service';
import { UpdateAvatarDto } from '../dto/updateAvatar/res.dto';
import { UpdateUserDto } from '../dto/updateUser/res.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';

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
      return new Ok('Get User Success', user);
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async update(
    @Usr() user: User & { _id: string },
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const result = await this.userService.update(user._id, updateUserDto);
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
  async updateAvatar(
    @Usr() user: User & { _id: string },
    @Body() payload: UpdateAvatarDto,
  ) {
    try {
      const result = await this.userService.updateAvatar(user._id, payload);
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
