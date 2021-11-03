import { LoggerService } from '../../../share/services/logger.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RMCAssignmentUser } from '../entities/rmc-assignmentsUser';

@Injectable()
export class RMCAssignmentUserService extends BaseService<RMCAssignmentUser> {
  constructor(
    @InjectModel(RMCAssignmentUser.modelName)
    private readonly _RMCAssignmentUserModel: ModelType<RMCAssignmentUser>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _RMCAssignmentUserModel;
  }
  async createClassAssignment(
    userId: string,
    assignmentId: string,
  ): Promise<RMCAssignmentUser> {
    try {
      const obj: any = {
        userId,
        assignmentId,
      };
      const newClassAssignment = RMCAssignmentUser.createModel(obj);

      const result = await this.create(newClassAssignment);
      if (result) {
        return this.cvtJSON(result) as RMCAssignmentUser;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'createClassAssignment-RMCAssignmentUsersService',
      );
      return null;
    }
  }
}
