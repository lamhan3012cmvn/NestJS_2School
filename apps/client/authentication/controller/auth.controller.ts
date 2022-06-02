import {
  Controller,
  Get,
  Post,
  Body,
  Header,
  UseGuards,
  HttpCode,
  UnauthorizedException,
  Delete,
} from '@nestjs/common';
import { LoginAuthenticationDto } from '../dto/login/req.dto';
import { LocalStrategy } from '../strategy/local.strategy';
import { RegisterAuthenticationDto } from '../dto/register/req.dto';
import { LoggerService } from '../../../share/services/logger.service';
import { ApiBaseResponse, Ok } from '../../../share/controller/baseController';
import { ILoginSuccessAuthDto } from '../dto/login/resSuccess.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { AuthService } from '../services/auth.service';
import { Auth, IAuth } from '../entities/auth.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { Usr } from '../decorator/user.decorator';
import { ISchemaUser } from 'apps/client/user/entities/user.entity';
@Controller('api/authentication')
export class AuthController {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post('/login')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async login(@Body() payload: LoginAuthenticationDto) {
    try {
      const result: ILoginSuccessAuthDto =
        await this.authenticationService.login(
          payload.username,
          payload.password,
        );
      if (result) {
        return new Ok('Login Success', result);
      }
      throw new UnauthorizedException('Login False');
    } catch (e) {
      this.loggerService.error(e.message, null, 'LOGIN-Controller');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('/login-admin')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async loginAdmin(@Body() payload: LoginAuthenticationDto) {
    try {
      const result: ILoginSuccessAuthDto =
        await this.authenticationService.loginAdmin(
          payload.username,
          payload.password,
        );
      if (result) {
        return new Ok('Login Success', result);
      }
      throw new UnauthorizedException('Login False');
    } catch (e) {
      this.loggerService.error(e.message, null, 'LOGIN-Controller');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('/register')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async register(@Body() payload: RegisterAuthenticationDto) {
    try {
      const result: IAuth = await this.authenticationService.register(
        payload.username,
        payload.password,
        payload.firstName,
        payload.lastName,
      );
      if (result) {
        return new Ok('Register Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('/registerAdmin')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async registerAdmin(@Body() payload: any) {
    try {
      const result: IAuth = await this.authenticationService.registerAdmin(
        payload.username,
        payload.password,
        payload.firstName,
        payload.lastName,
      );
      if (result) {
        return new Ok('Register Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('/forgot-password')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async forgotPassword(@Body() payload: RegisterAuthenticationDto) {
    try {
      const result: Auth = await this.authenticationService.forgotPassword(
        payload.username,
        payload.password,
      );
      if (result) {
        return new Ok('Register Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('/findAllUser')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @UseGuards(JwtAuthGuard)
  async findAllUser() {
    try {
      const result = await this.authenticationService.findAllUser();
      if (result) {
        return new Ok('Register Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      throw new Error2SchoolException(e.message);
    }
  }

  @Delete()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  @UseGuards(JwtAuthGuard)
  async deleteAccount(@Usr() user: ISchemaUser) {
    try {
      const result = await this.authenticationService.deleteAccount(user);
      if (result) {
        return new Ok('delete success Success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      throw new Error2SchoolException(e.message);
    }
  }
}
