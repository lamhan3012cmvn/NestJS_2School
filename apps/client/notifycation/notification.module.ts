import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';
import { DeviceModule } from './../device/device.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'apps/share/services/logger.service';
import { DeviceService } from '../device/services/device.service';
import { NotificationController } from './controllers/notification.controller';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './services/notification.service';
import { Device } from '../device/entities/device.entity';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';

@Module({
  imports: [
    DeviceModule,
    MongooseModule.forFeature([
      { name: Notification.modelName, schema: Notification.model.schema },
      { name: Device.modelName, schema: Device.model.schema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
    ]),
  ],
  controllers: [NotificationController],
  providers: [
    LoggerService,
    NotificationService,
    DeviceService,
    UpLoadFileService,
  ],
  exports: [NotificationService],
})
export class NotificationModule {}
