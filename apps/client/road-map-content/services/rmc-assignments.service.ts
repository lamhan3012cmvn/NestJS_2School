import { LoggerService } from '../../../share/services/logger.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RMCAssignment } from '../entities/rmc-assignments';

@Injectable()
export class RMCAssignmentService extends BaseService<RMCAssignment> {
  constructor(
    @InjectModel(RMCAssignment.modelName)
    private readonly _RMCAssignmentModel: ModelType<RMCAssignment>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _RMCAssignmentModel;
  }
  async createClassAssignment(
    name: string,
    description: string,
  ): Promise<RMCAssignment> {
    try {
      const obj: any = {
        name,
        description,
      };
      const newClassAssignment = RMCAssignment.createModel(obj);

      const result = await this.create(newClassAssignment);
      if (result) {
        return this.cvtJSON(result) as RMCAssignment;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'createClassAssignment-RMCAssignmentsService',
      );
      return null;
    }
  }
}
