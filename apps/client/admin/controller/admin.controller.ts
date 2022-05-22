import {
  Body,
  Controller,
  Get,
  HttpCode, Post, UseGuards
} from '@nestjs/common';
import { Roles } from 'apps/client/authentication/decorator/roles.decorator';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { Role } from 'apps/client/authentication/guard/role.enum';
import { RolesGuard } from 'apps/client/authentication/guard/roles.guard';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { BaseController, Ok } from '../../../share/controller/baseController';
import { LoggerService } from '../../../share/services/logger.service';
import { AdminService } from '../service/admin.service';

@Controller('api/admin')
export class AdminController extends BaseController {
  constructor(
    private readonly userService: AdminService,
    private readonly loggerService: LoggerService,
  ) {
    super();
  }

  @Get('info')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard,RolesGuard)
  // @RolesGuard()
  @HttpCode(200)
  async getInfoAdmin(@Usr() user) {
    try {
      console.log("role role",user)
      return user;
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('register')
  @HttpCode(200)
  async createAccountAdmin(@Body() payload:any) {
    try {
      console.log("payload",payload)
      const result= await this.userService.create(payload)
      return new Ok('Get User Success', result);
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserController');
      throw new Error2SchoolException(e.message);
    }
  }
}
