import { Module } from '@nestjs/common';
import { UpLoadFileController } from './up-load-file.controller';
import { UpLoadFileService } from './up-load-file.service';

@Module({
  controllers: [UpLoadFileController],
  providers: [UpLoadFileService],
})
export class UpLoadFileModule {}
