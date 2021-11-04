import { LoggerService } from './../../../share/services/logger.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RMCFile } from '../entities/rmc-files';
import { CreateRMCFileDto } from '../dto/createRMCFile/req.dto';

@Injectable()
export class RMCFilesService extends BaseService<RMCFile> {
  constructor(
    @InjectModel(RMCFile.modelName)
    private readonly _rmcFileModel: ModelType<RMCFile>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _rmcFileModel;
  }
  async createClassFile(payload: CreateRMCFileDto): Promise<RMCFile> {
    try {
      const obj: any = {
        ...payload,
      };
      const newClassFile = RMCFile.createModel(obj);

      const result = await this.create(newClassFile);
      if (result) {
        return this.cvtJSON(result) as RMCFile;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'createClassFile-RMCFilesService',
      );
      return null;
    }
  }
}
