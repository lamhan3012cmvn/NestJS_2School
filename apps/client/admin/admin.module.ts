import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from '../../share/services/logger.service';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
import { UpLoadFileService } from '../up-load-file/services/up-load-file.service';
import { AdminController } from './controller/admin.controller';
import { Admin, AdminSchema } from './entities/admin.entity';
import { AdminService } from './service/admin.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Admin.name, schema: AdminSchema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },

    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService, UpLoadFileService, LoggerService],
  exports: [AdminService],
})
export class AdminModule {}
