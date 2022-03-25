import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'apps/share/services/logger.service';
import { SharedModule } from 'apps/share/shared.module';
import { ClassModule } from '../class/class.module';
import { Classes } from '../class/entities/class.entity';
import { ClassService } from '../class/services/class.service';
import { MemberClasses } from '../memberClass/entities/memberClass.entity';
import { MemberClassService } from '../memberClass/services/memberClass.service';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { UpLoadFileService } from '../up-load-file/services/up-load-file.service';
import { User, UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/service/user.service';
import { UserModule } from '../user/user.module';
import { MessageController } from './controllers/message.controller';
import { Message } from './entities/message.entity';
import { MessageService } from './services/message.service';

@Module({
  imports: [
    SharedModule,
    ClassModule,
    UserModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: MemberClasses.name, schema: MemberClasses.model.schema },
      { name: Classes.modelName, schema: Classes.model.schema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
      { name: Message.modelName, schema: Message.model.schema },
    ]),
  ],
  controllers: [MessageController],
  providers: [
    MessageService,
    ClassService,
    LoggerService,
    MemberClassService,
    UserService,
    UpLoadFileService,
  ],
})
export class MessageModule {}
