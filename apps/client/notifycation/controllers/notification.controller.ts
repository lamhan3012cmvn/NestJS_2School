import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'apps/client/user/entities/user.entity';
import { LoggerService } from 'apps/share/services/logger.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { NotificationService } from '../services/notification.service';
import { Ok } from 'apps/share/controller/baseController';

@Controller('api/notification')
export class NotificationController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly _notificationService: NotificationService,
  ) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getNotification(@Usr() user: User) {
    try {
      const result = await this._notificationService.getNotification(
        user.createdBy,
      );
      return new Ok('Get list notification', result);
    } catch (e) {
      this.loggerService.error(e.message, null, 'get-NotificationController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('quantity')
  @UseGuards(JwtAuthGuard)
  async getNotificationQuantity(@Usr() user: User) {
    try {
      const result = await this._notificationService.getNotificationCount(
        user.createdBy,
      );
      return new Ok('Get list quantity', {
        quantity: result,
      });
    } catch (e) {
      this.loggerService.error(e.message, null, 'get-NotificationController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async seenNotification(@Usr() user: User, @Query() query: { id: string }) {
    try {
      const result = await this._notificationService.findOneAndUpdate(
        {
          idUser: user.createdBy,
          _id: query.id,
          isSeen: false,
        },
        {
          isSeen: true,
        },
      );
      if (result) {
        return new Ok(
          'Change seen notification',
          this._notificationService.cvtJSON(result),
        );
      }
      return new Ok('Notification not found or Notification is Seen', {
        data: undefined,
      });
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'change-NotificationController',
      );
      throw new Error2SchoolException(e.message);
    }
  }
}
