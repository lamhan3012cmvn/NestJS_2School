import { DeviceService } from 'apps/client/device/services/device.service';
import { NotificationService } from 'apps/client/notifycation/services/notification.service';
import { Notification } from './../notifycation/entities/notification.entity';
import { UpLoadFileService } from './../up-load-file/services/up-load-file.service';
import { UserSchema } from './../user/entities/user.entity';
import { UserService } from './../user/service/user.service';
import { LoggerService } from '../../share/services/logger.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberClasses } from './entities/memberClass.entity';
import { MemberClassService } from './services/memberClass.service';
import { MemberClassController } from './controllers/memberClass.controller';
import { UserModule } from '../user/user.module';
import { User } from '../user/entities/user.entity';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { DeviceModule } from '../device/device.module';
import { Device } from '../device/entities/device.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MemberClasses.modelName, schema: MemberClasses.model.schema },
      ,
      { name: User.name, schema: UserSchema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
      { name: Notification.name, schema: Notification.model.modelName },
      { name: Device.modelName, schema: Device.model.schema },

      ,
    ]),
    UserModule,
    MemberClassModule,
    DeviceModule,
  ],
  controllers: [MemberClassController],
  providers: [
    LoggerService,
    MemberClassService,
    UpLoadFileService,
    UserService,
    NotificationService,
    DeviceService,
  ],
  exports: [MemberClassService],
})
export class MemberClassModule {}
