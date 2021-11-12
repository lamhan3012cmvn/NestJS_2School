import { DeviceModule } from './../device/device.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'apps/share/services/logger.service';
import { DeviceService } from '../device/services/device.service';
import { NotificationController } from './controllers/notification.controller';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './services/notification.service';
import { Device } from '../device/entities/device.entity';

@Module({
  imports: [
    DeviceModule,
    MongooseModule.forFeature([
      { name: Notification.name, schema: Notification.model.modelName },
      { name: Device.modelName, schema: Device.model.schema },
    ]),
  ],
  controllers: [NotificationController],
  providers: [LoggerService, NotificationService, DeviceService],
  exports: [NotificationService],
})
export class NotificationModule {}
