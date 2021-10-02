import { Usr } from './../../authentication/decorator/user.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { QuestionService } from '../services/question.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Post('/')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async login(@Usr() user: User, @Body() payload: any) {
    try {
      // const result: ILoginSuccessAuthDto =
      //   await this.authenticationService.login(
      //     payload.username,
      //     payload.password,
      //   );
      // if (result) {
      //   return new Ok('Login Success', result);
      // }
      throw new ResourceFoundException();
    } catch (e) {
      // this.loggerService.error(e.message, null, 'LOGIN-Controller');
      throw new Error2SchoolException(e.message);
    }
  }
}
