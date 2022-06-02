import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { Ok } from 'apps/share/controller/baseController';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { IQueryFind } from 'apps/share/interfaces/query.interface';
import { LoggerService } from 'apps/share/services/logger.service';
import { MessageService } from '../services/message.service';

@Controller('api/message')
export class MessageController {
  constructor(
    private readonly _messageService: MessageService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Usr() user: User & { _id: string },
    @Body() createMessage: any,
  ) {
    try {
      const result = await this._messageService.createMessage({
        ...createMessage,
        sender: user._id,
      });
      if (result) {
        return new Ok('Create Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('/conversation/:idClass')
  @UseGuards(JwtAuthGuard)
  async getConversationByClass(
    @Usr() user: User,
    @Param('idClass') idClass: string,
    @Query() query: IQueryFind,
  ) {
    try {
      const result = await this._messageService.findAll(
        { idClass: idClass },
        query,
        'sender',
      );
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

  @Get(':idMess')
  // @UseGuards(JwtAuthGuard)
  async getMessageDetail(
    // @Usr() user: User,
    @Param('idMess') idMess: string,
  ) {
    try {
      const result = await this._messageService.findById(idMess, 'sender');
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
    return;
  }
}
