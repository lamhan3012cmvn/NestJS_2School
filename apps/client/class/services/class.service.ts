import { Classes } from './../entities/class.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { UpdateClassDto } from '../dto/updateClass/update-class.dto';
import { LoggerService } from 'apps/share/services/logger.service';
import { ResponseService } from 'apps/share/services/respone.service';
import { IQueryFind } from 'apps/share/interfaces/query.interface';
import { BaseService } from 'apps/share/services/baseService.service';
import { ModelType } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';
import { User } from 'apps/client/user/entities/user.entity';
import { UserService } from 'apps/client/user/service/user.service';
import { MemberClassService } from 'apps/client/memberClass/services/memberClass.service';
import { ApiPreconditionFailedResponse } from '@nestjs/swagger';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import * as mongoose from 'mongoose';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';

@Injectable()
export class ClassService extends BaseService<Classes> {
  constructor(
    @InjectModel(Classes.modelName)
    private _classModel: ModelType<Classes>,
    private _loggerService: LoggerService,
    private _userService: UserService,
    private _memberClassService: MemberClassService,
    private _uploadFileService: UpLoadFileService,
    @InjectConnection() private readonly connection: mongoose.Connection, // private _mongoose:
  ) {
    super();
    this._model = _classModel;
  }
  async createClasses(
    createdBy: string,
    createClassDto: CreateClassDto,
  ): Promise<Classes> {
    try {
      const obj: any = { ...createClassDto };
      obj.createdBy = createdBy;
      const newClass = Classes.createModel(obj);

      const newClasses = await this.create(newClass);

      const joinMember = await this.joinMemberClass(createdBy, newClass._id, 2);

      if (newClasses) {
        return this.cvtJSON(newClasses) as Classes;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }

  async findAllMemberClass(idClass: string, status = 1) {
    try {
      const result = await this._memberClassService.getMemberByClass(
        idClass,
        status,
      );
      return result;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'findAllMemberClass-ClassesService',
      );
    }
  }
  async findAllClasses(
    user: User & { _id: string },
    query: IQueryFind = { skip: '0', limit: '15' },
    host: string,
  ): Promise<Array<Classes>> {
    try {
      const classMember = await this._memberClassService.getClassByUserJoined(
        user._id,
      );
      console.log(
        `LHA:  ===> file: class.service.ts ===> line 84 ===> classMember`,
        classMember,
      );
      const newClasses = await this.findAll(
        { $or: [{ createdBy: user.createdBy }, { _id: { $in: classMember } }] },
        query,
        'createdBy',
      );
      console.log(
        `LHA:  ===> file: class.service.ts ===> line 89 ===> newClasses`,
        newClasses,
      );
      const classes = this.cvtJSON(newClasses) as Classes[];
      const result = [];
      for (const c of classes) {
        const obj: any = { ...c };
        obj.member = await this._memberClassService.getMemberByClass(obj._id);
        result.push(obj);
      }
      return result;

      if (newClasses) {
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

  async updateClasses(id: string, payload: any): Promise<Classes> {
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

  async recommendClasses(idUser: string) {
    try {
      const memberClass = await this._memberClassService.findAll({
        idUser: idUser,
      });
      const arrClass = memberClass.map((e) => e.idClass);

      const classes = this.cvtJSON(
        await this.findAll({
          _id: { $nin: arrClass },
          status: DFStatus.Active,
        }),
      );
      const result = [];
      for (const c of classes) {
        const u = await this._userService.findOne({ createdBy: c.createdBy });
        const obj = { ...c };
        if (!(c.image === '')) {
          const image = await this._uploadFileService.findById(c.image);
          if (image) obj.image = image.path;
        }

        if (u) obj.createdBy = this.cvtJSON(u);
        result.push(obj);
      }
      return this.cvtJSON(result);
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'recommendClasses-ClassesService',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  async joinMemberClass(idUser: string, idClass: string, role = 0) {
    try {
      const newMemberClass = await this._memberClassService.joinClass(
        idUser,
        idClass,
        role,
      );
      if (newMemberClass) {
        return true;
      }
      return null;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Remove-ClassesService');
      return null;
    }
  }
  async leaveMemberClass(idUser: string, idClass: string) {
    try {
      const newMemberClass = await this._memberClassService.leaveClass(
        idUser,
        idClass,
      );
      console.log(
        `LHA:  ===> file: class.service.ts ===> line 165 ===> newMemberClass`,
        newMemberClass,
      );
      if (newMemberClass) {
        return true;
      }
      return false;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Remove-ClassesService');
      return null;
    }
  }

  async checkHostClass(idUser: string, idClass: string): Promise<Classes> {
    console.log(
      `LHA:  ===> file: class.service.ts ===> line 236 ===> idClass`,
      idClass,
    );
    console.log(
      `LHA:  ===> file: class.service.ts ===> line 236 ===> idUser`,
      idUser,
    );
    try {
      const classes = await this.findById(idClass);
      console.log(
        `LHA:  ===> file: class.service.ts ===> line 246 ===> classes`,
        classes,
      );
      const newHostClass = await this.findOne({
        createdBy: idUser,
        _id: idClass,
      });
      console.log(
        `LHA:  ===> file: class.service.ts ===> line 241 ===> newHostClass`,
        newHostClass,
      );
      if (newHostClass) {
        return newHostClass;
      }
      throw new NotFoundException('Not found class by User');
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'checkHostClass-ClassesService',
      );
      // return null;
      throw new Error2SchoolException(e.message);
    }
  }
}
