import { Usr } from './../../authentication/decorator/user.decorator';
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

@Controller('api/user')
export class UserController extends BaseController {
  constructor(
    private readonly userService: UserService,
    private readonly loggerService: LoggerService,
  ) {
    super();
  }

  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   try {
  //     const result = await this.userService.create(createUserDto);
  //     return this.resApi(result, 'Create User Success');
  //     // if (result) {
  //     //   return new Ok('Create User Success', result);
  //     // }
  //     // return new ApiBaseResponse(404);
  //   } catch (e) {
  //     this.loggerService.error(e.message, null, 'create-UserController');
  //     throw new Error2SchoolException(e.message);
  //   }
  // }

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
  async update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const result = await this.userService.update(id, updateUserDto);
      if (result) {
        return new Ok('Get User Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'update-UserController');
      throw new Error2SchoolException(e.message);
    }
  }
}
