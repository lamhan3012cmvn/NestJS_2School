import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'apps/share/services/logger.service';
import { DeviceService } from '../device/services/device.service';
import { NotificationController } from './controllers/notification.controller';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './services/notification.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: Notification.model.modelName },
    ]),
  ],
  controllers: [NotificationController],
  providers: [LoggerService, NotificationService, DeviceService],
  exports: [NotificationService],
})
export class MemberClassModule {}
