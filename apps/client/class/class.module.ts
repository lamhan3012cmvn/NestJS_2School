import { LoggerService } from './../../share/services/logger.service';
import { Module } from '@nestjs/common';
import { ClassService } from './services/class.service';
import { ClassController } from './controllers/class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Classes } from './entities/class.entity';
import { UserService } from '../user/service/user.service';
import { UserModule } from '../user/user.module';
import { User, UserSchema } from '../user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Classes.modelName, schema: Classes.model.schema },
    ]),
  ],
  controllers: [ClassController],
  providers: [ClassService, LoggerService, UserService],
})
export class ClassModule {}
