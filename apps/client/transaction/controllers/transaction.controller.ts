import {
  Controller, Get, Param, Query, UseGuards
} from '@nestjs/common';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { ISchemaUser } from 'apps/client/user/entities/user.entity';
import { Ok } from 'apps/share/controller/baseController';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { LoggerService } from 'apps/share/services/logger.service';
import { TransactionService } from '../services/transaction.service';

@Controller('api/transaction')
export class TransactionController {
  constructor(
    private readonly _transactionService: TransactionService,
    private readonly loggerService: LoggerService,
  ) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getConversationByClass(
    @Usr() user: ISchemaUser,
    @Query() query:any
  ) {
    try {
      const result = await this._transactionService.findAll({
        $or:[{ sender: user._id }, { receiver: user._id }]
      },{limit:query?.limit||16,skip:query?.skip||0},"class sender receiver");
      if (result) {
        return new Ok(
          'Get Message success',
          JSON.parse(JSON.stringify(result)),
        );
      }
      throw new ResourceFoundException({
        message: 'Get Message fail',
      });
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }
  
}
