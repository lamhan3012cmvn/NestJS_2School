import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { User } from 'apps/client/user/entities/user.entity';
import { LoggerService } from 'apps/share/services/logger.service';
import { BaseController, Ok } from 'apps/share/controller/baseController';
import { MemberClassService } from '../services/memberClass.service';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';

@Controller('api/memberClass')
export class MemberClassController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly _memberClassService: MemberClassService,
  ) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getMemberClass(@Usr() user: User, @Query() query: { idClass: string }) {
    try {
      const result = await this._memberClassService.getMemberByClass(
        query.idClass,
      );
      if (result) {
        return new Ok('Get List Member Success', result);
      }
      throw new ResourceFoundException('Get List Member Fail');
    } catch (e) {
      this.loggerService.error(e.message, null, 'get-MemberClassController');
      throw new Error2SchoolException(e.message);
    }
  }
}
