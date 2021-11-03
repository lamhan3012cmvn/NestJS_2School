import { LoggerService } from '../../../share/services/logger.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RMCAttendancesUser } from '../entities/rmc-attendancesUser';

@Injectable()
export class RMCAttendancesUserService extends BaseService<RMCAttendancesUser> {
  constructor(
    @InjectModel(RMCAttendancesUser.modelName)
    private readonly _RMCAttendancesUserModel: ModelType<RMCAttendancesUser>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _RMCAttendancesUserModel;
  }
  async createClassAttendanceUser(
    userId: string,
    attendanceId: string,
  ): Promise<RMCAttendancesUser> {
    try {
      const obj: any = {
        userId,
        attendanceId,
      };
      const newClassAttendanceUser = RMCAttendancesUser.createModel(obj);

      const result = await this.create(newClassAttendanceUser);
      if (result) {
        return this.cvtJSON(result) as RMCAttendancesUser;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'createClassAttendanceUser-RMCAttendancesUserService',
      );
      return null;
    }
  }
}
