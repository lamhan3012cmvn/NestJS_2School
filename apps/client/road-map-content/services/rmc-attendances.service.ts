import { LoggerService } from '../../../share/services/logger.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RMCAttendances } from '../entities/rmc-attendances';

@Injectable()
export class RMCAttendanceService extends BaseService<RMCAttendances> {
  constructor(
    @InjectModel(RMCAttendances.modelName)
    private readonly _RMCAttendancesModel: ModelType<RMCAttendances>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _RMCAttendancesModel;
  }
  async createClassAttendance(
    name: string,
    description: string,
    startTime: string,
    endTime: string,
  ): Promise<RMCAttendances> {
    try {
      const obj: any = {
        name,
        description,
        startTime,
        endTime,
      };
      const newClassAttendance = RMCAttendances.createModel(obj);

      const result = await this.create(newClassAttendance);
      if (result) {
        return this.cvtJSON(result) as RMCAttendances;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'createClassAttendance-RMCAttendancesService',
      );
      return null;
    }
  }
}
