import { LoggerService } from '../../share/services/logger.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberClasses } from './entities/memberClass.entity';
import { MemberClassService } from './services/memberClass.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MemberClasses.name, schema: MemberClasses.model.modelName },
    ]),
  ],
  controllers: [],
  providers: [LoggerService],
  exports: [MemberClassService],
})
export class MemberClassModule {}
