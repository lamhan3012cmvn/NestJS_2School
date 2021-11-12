import { UpLoadFileService } from './../up-load-file/services/up-load-file.service';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controller/user.controller';
import { User, UserSchema } from './entities/user.entity';
import { UserService } from './service/user.service';
import { LoggerService } from '../../share/services/logger.service';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UpLoadFileService, LoggerService],
  exports: [UserService],
})
export class UserModule {}
