import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controller/user.controller';
import { User, UserSchema } from './entities/user.entity';
import { UserService } from './service/user.service';
import { LoggerService } from '../../share/services/logger.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, LoggerService],
})
export class UserModule {}
