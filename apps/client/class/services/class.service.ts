import { Classes } from './../entities/class.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { UpdateClassDto } from '../dto/updateClass/update-class.dto';
import { LoggerService } from 'apps/share/services/logger.service';
import { ResponseService } from 'apps/share/services/respone.service';
import { IQueryFind } from 'apps/share/interfaces/query.interface';
import { BaseService } from 'apps/share/services/baseService.service';
import { ModelType } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';

@Injectable()
export class ClassService extends BaseService<Classes> {
  constructor(
    @InjectModel(Classes.modelName)
    private _classModel: ModelType<Classes>,
    private _loggerService: LoggerService,
  ) {
    super();
  }
  async createClasses(
    createBy: string,
    createClassDto: CreateClassDto,
  ): Promise<Classes> {
    try {
      const obj: any = { ...createClassDto };
      obj.createBy = createBy;
      const newClasses = await this.create(obj);
      if (newClasses) {
        return this.cvtJSON(newClasses) as Classes;
      }
      return null;
    } catch (e) {
      this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }

  async findAllClasses(
    query: IQueryFind = { skip: '0', limit: '15' },
  ): Promise<Array<Classes>> {
    try {
      const newClasses = await this.findAll({}, query);
      if (newClasses) {
        return this.cvtJSON(newClasses) as Classes[];
      }
      return null;
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'FIND_ALL_CLASSES-ClassesService',
      );
      return null;
    }
  }

  async findOneClasses(filter = {}): Promise<Classes> {
    try {
      const newClasses = await this.findOne(filter);
      if (newClasses) {
        return this.cvtJSON(newClasses) as Classes;
      }
      return null;
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'FIND_ONE_CLASSES-ClassesService',
      );
      return null;
    }
  }

  async updateClasses(id: string, payload: UpdateClassDto): Promise<Classes> {
    try {
      const updateClasses = await this.update(id, payload);
      if (updateClasses) {
        return this.cvtJSON(updateClasses) as Classes;
      }
      return null;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Update-ClassesService');
      return null;
    }
  }
  async removeClasses(id: string) {
    try {
      const updateClasses = await this.update(id, {
        status: DFStatus.inActive,
      });
      if (updateClasses) {
        return this.cvtJSON(updateClasses) as Classes;
      }
      return null;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Remove-ClassesService');
      return null;
    }
  }
}
