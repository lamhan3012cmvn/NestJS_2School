import { MemberClassModule } from './../memberClass/memberClass.module';
import { LoggerService } from './../../share/services/logger.service';
import { Module } from '@nestjs/common';
import { ClassService } from './services/class.service';
import { ClassController } from './controllers/class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Classes } from './entities/class.entity';
import { UserService } from '../user/service/user.service';
import { UserModule } from '../user/user.module';
import { User, UserSchema } from '../user/entities/user.entity';
import { MemberClassService } from '../memberClass/services/memberClass.service';
import { MemberClasses } from '../memberClass/entities/memberClass.entity';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { UpLoadFileService } from '../up-load-file/services/up-load-file.service';

@Module({
  imports: [
    UserModule,
    // MemberClassModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: MemberClasses.name, schema: MemberClasses.model.schema },
      { name: Classes.modelName, schema: Classes.model.schema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
    ]),
  ],
  controllers: [ClassController],
  providers: [
    ClassService,
    LoggerService,
    MemberClassService,
    UserService,
    UpLoadFileService,
  ],
  exports: [ClassService],
})
export class ClassModule {}
