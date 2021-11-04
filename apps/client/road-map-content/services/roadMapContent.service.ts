import {
  CreateRMCAttendanceDto,
  ICreateRMCAttendance,
} from './../dto/createRMCAttendance/req.dto';
import {
  CreateRMCAssignmentDto,
  ICreateRMCAssignment,
} from './../dto/createRMCAssignment/req.dto';
import { RMCAssignmentService } from './rmc-assignments.service';
import { LoggerService } from './../../../share/services/logger.service';
import { RoadMapContent } from './../entities/roadMapContent.entity';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { RMCAssignmentUserService } from './rmc-assignmentsUserservice';
import { RMCAttendancesUserService } from './rmc-attendancesUser.service';
import { RMCAttendanceService } from './rmc-attendances.service';
import { RMCFilesService } from './rmc-files.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { CreateRMCFileDto, ICreateRMCFile } from '../dto/createRMCFile/req.dto';
import { runInThisContext } from 'vm';

@Injectable()
export class RoadMapContentService extends BaseService<RoadMapContent> {
  constructor(
    @InjectModel(RoadMapContent.modelName)
    private readonly _setOfQuestionsModel: ModelType<RoadMapContent>,
    private readonly _loggerService: LoggerService,
    private readonly _rmcAssignmentService: RMCAssignmentService,
    private readonly _rmcAssignmentUserService: RMCAssignmentUserService,
    private readonly _rmcAttendanceService: RMCAttendanceService,
    private readonly _rmcAttendanceUserService: RMCAttendancesUserService,
    private readonly _rmcFilesService: RMCFilesService,
  ) {
    super();
    this._model = _setOfQuestionsModel;
  }

  private async createRoadMapContent(
    createdBy: string,
    type: number,
    idRoadMap: string,
    payload: any,
  ): Promise<RoadMapContent> {
    try {
      const obj: any = { ...payload };
      obj.createBy = createdBy;
      obj.type = type;
      obj.idRoadMap = idRoadMap;
      const newRoadMap = RoadMapContent.createModel(obj);

      const roadMapS = await this.create(newRoadMap);
      if (roadMapS) {
        return this.cvtJSON(roadMapS) as RoadMapContent;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-RoadMapContentService',
      );
      return null;
    }
  }

  async createRMCAssignment(payload: ICreateRMCAssignment): Promise<any> {
    try {
      const resultRMC = await this._rmcAssignmentService.createClassAssignment(
        payload,
      );
      if (resultRMC) {
        const result = await this.createRoadMapContent(
          payload.createdBy,
          payload.type,
          payload.idRoadMap,
          {
            rmc: resultRMC._id,
          },
        );
        if (result) {
          return result;
        }
        throw new NotFoundException('Create RMC False');
      }
      throw new NotFoundException('Create RMC createRMCAssignment');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC createRMCAssignment ERR');
    }
  }

  async createRMCAttendance(payload: ICreateRMCAttendance): Promise<any> {
    try {
      const resultRMC = await this._rmcAttendanceService.createClassAttendance(
        payload,
      );
      if (resultRMC) {
        const result = await this.createRoadMapContent(
          payload.createdBy,
          payload.type,
          payload.createdBy,
          { rmc: resultRMC._id },
        );
        if (result) {
          return result;
        }
        throw new NotFoundException('Create RMC False');
      }
      throw new NotFoundException('Create RMC createRMCAttendance');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC createRMCAssignment ERR');
    }
  }

  async createRMCFile(payload: ICreateRMCFile): Promise<any> {
    try {
      const resultRMC = await this._rmcFilesService.createClassFile(payload);
      if (resultRMC) {
        const result = await this.createRoadMapContent(
          payload.createdBy,
          payload.type,
          payload.idRoadMap,
          { rmc: resultRMC._id },
        );
        if (result) {
          return result;
        }
        throw new NotFoundException('Create RMC False');
      }
      throw new NotFoundException('Create RMC createRMCFile');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC createRMCFile ERR');
    }
  }

  //update RMC Assignment
  async updateRMCAssignment(idRMC: string, payload: any): Promise<any> {
    try {
      const rmc = await this.findById(idRMC);
      if (rmc) {
        const result = await this._rmcAssignmentService.findOneAndUpdate(
          { _id: rmc.rmc },
          payload,
        );
        if (result) {
          return result;
        }
      }
      throw new NotFoundException('Update RMC False');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'UPDATE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC updateRMCAssignment ERR');
    }
  }

  //update RMC Attendance
  async updateRMCAttendance(idRMC: string, payload: any): Promise<any> {
    try {
      const rmc = await this.findById(idRMC);
      if (rmc) {
        const result = await this._rmcAttendanceService.findOneAndUpdate(
          { _id: rmc.rmc },
          payload,
        );
        if (result) {
          const obj = { ...this.cvtJSON(rmc) };
          obj.rmc = this.cvtJSON(result);
          return obj;
        }
      }
      throw new NotFoundException('Update RMC False');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'UPDATE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC updateRMCAttendance ERR');
    }
  }

  //delete RMC Assignment
  async deleteRMCAssignment(idRMC: string): Promise<any> {
    try {
      const rmc = await this.findById(idRMC);
      console.log(
        `LHA:  ===> file: roadMapContent.service.ts ===> line 212 ===> rmc`,
        rmc,
      );
      if (rmc) {
        const resultRMC =
          await this._rmcAssignmentService.deleteClassAssignment(rmc.rmc);
        if (resultRMC) {
          const result = await this.delete(idRMC);
          if (result) {
            return result;
          }
        }
      }
      throw new NotFoundException('Delete RMC False');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'DELETE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC deleteRMCAssignment ERR');
    }
  }

  //delete RMC Attendance

  async deleteRMCAttendance(idRMC: string): Promise<any> {
    try {
      const rmc = await this.findById(idRMC);
      console.log(
        `LHA:  ===> file: roadMapContent.service.ts ===> line 243 ===> rmc`,
        rmc,
      );
      if (rmc) {
        const resultRMC =
          await this._rmcAttendanceService.deleteClassAttendance(rmc.rmc);
        if (resultRMC) {
          const result = await this.delete(idRMC);
          if (result) {
            return result;
          }
        }
      }
      throw new NotFoundException('Delete RMC False');
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'DELETE-RoadMapContentService',
      );
      throw new Error2SchoolException('RMC deleteRMCAttendance ERR');
    }
  }
}
