import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from 'apps/share/services/logger.service';
import { SharedModule } from 'apps/share/shared.module';
import { UpLoadFileController } from './controllers/up-load-file.controller';
import { UpLoadFile } from './entities/upLoadFile.entity';
import { UpLoadFileService } from './services/up-load-file.service';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
    ]),
  ],
  controllers: [UpLoadFileController],
  providers: [UpLoadFileService, LoggerService],
})
export class UpLoadFileModule {}
