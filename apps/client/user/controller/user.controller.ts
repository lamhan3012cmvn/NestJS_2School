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
} from '@nestjs/common';
import { IQueryFind } from '../../../share/interfaces/query.interface';

import { UserService } from '../service/user.service';
import { LoggerService } from '../../../share/services/logger.service';
import { UpdateUserDto } from '../dto/updateUser/res.dto';

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
  //     return new ApiBaseResponse(500);
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
      return new ApiBaseResponse(500);
    }
  }

  @Get()
  async findById(@Query('id') id: string) {
    try {
      const result = await this.userService.findById(id);
      if (result) {
        return new Ok('Get User Success', result);
      }
      return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserController');
      return new ApiBaseResponse(500);
    }
  }

  @Patch()
  async update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const result = await this.userService.update(id, updateUserDto);
      if (result) {
        return new Ok('Get User Success', result);
      }
      return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'update-UserController');
      return new ApiBaseResponse(500);
    }
  }
}
