import { Controller, Get, Post, Body, Header, UseGuards } from '@nestjs/common';
import { LoginAuthenticationDto } from '../dto/login/req.dto';
import { LocalStrategy } from '../strategy/local.strategy';
import { RegisterAuthenticationDto } from '../dto/register/req.dto';
import { LoggerService } from 'apps/share/services/logger.service';
import { ApiBaseResponse, Ok } from 'apps/share/controller/baseController';
import { ILoginSuccessAuthDto } from '../dto/login/resSuccess.dto';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { AuthService } from '../services/auth.service';
import { Auth, IAuth } from '../entities/auth.entity';
@Controller('api/authentication')
export class AuthController {
  constructor(
    private readonly authenticationService: AuthService,
    private readonly localStrategyService: LocalStrategy,
    private readonly loggerService: LoggerService,
  ) {}

  @Post('/login')
  @Header('Content-Type', 'application/json')
  async login(@Body() payload: LoginAuthenticationDto) {
    try {
      const result: ILoginSuccessAuthDto =
        await this.localStrategyService.validate(payload);
      if (result) {
        return new Ok('Login Success', result);
      }
      return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'LOGIN-Controller');
      return new ApiBaseResponse(500);
    }
  }

  @Post('/register')
  @Header('Content-Type', 'application/json')
  async register(@Body() payload: RegisterAuthenticationDto) {
    try {
      const result: IAuth = await this.authenticationService.register(
        payload.username,
        payload.password,
      );
      if (result) {
        return new Ok('Register Success', result);
      }
      return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      return new ApiBaseResponse(500);
    }
  }

  @Post('/forgot-password')
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
      return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      return new ApiBaseResponse(500);
    }
  }

  @Get('/findAllUser')
  @Header('Content-Type', 'application/json')
  @UseGuards(JwtAuthGuard)
  async findAllUser() {
    try {
      const result = await this.authenticationService.findAllUser();
      if (result) {
        return new Ok('Register Success', result);
      }
      return new ApiBaseResponse(404);
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Controller');
      return new ApiBaseResponse(500);
    }
  }
}
