import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExpressSwaggerCustomOptions } from '@nestjs/swagger';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { UserNotFoundException } from 'apps/share/exceptions/user-not-found.exception';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { UpLoadFile } from '../entities/upLoadFile.entity';

@Injectable()
export class UpLoadFileService extends BaseService<UpLoadFile> {
  constructor(
    @InjectModel(UpLoadFile.modelName)
    private _upLoadFileModel: ModelType<UpLoadFile>,
    private _loggerService: LoggerService,
  ) {
    super();
    this._model = _upLoadFileModel;
  }
  async createUploadFile(fileName: string, path: string) {
    try {
      const obj: any = {
        name: fileName,
        path: path,
      };
      const model = UpLoadFile.createModel(obj);
      const newUploadFile = await this.create(model);
      if (newUploadFile) {
        return { id: newUploadFile.id };
      }
      throw new UserNotFoundException('Upload file false when save model');
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'upLoadFileService-createUploadFile',
      );
      throw new Error2SchoolException(e.message);
    }
  }
}
