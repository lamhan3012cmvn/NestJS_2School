import { MemberClasses } from '../entities/memberClass.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoggerService } from 'apps/share/services/logger.service';
import { ResponseService } from 'apps/share/services/respone.service';
import { IQueryFind } from 'apps/share/interfaces/query.interface';
import { BaseService } from 'apps/share/services/baseService.service';
import { ModelType } from 'typegoose';
import { DFStatus } from 'apps/share/enums/status.enum';
import { User } from 'apps/client/user/entities/user.entity';
import { UserService } from 'apps/client/user/service/user.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { UserNotFoundException } from 'apps/share/exceptions/user-not-found.exception';

@Injectable()
export class MemberClassService extends BaseService<MemberClasses> {
  constructor(
    @InjectModel(MemberClasses.modelName)
    private _memberClassModel: ModelType<MemberClasses>,
    private _loggerService: LoggerService,
    private _userService: UserService,
  ) {
    super();
    this._model = _memberClassModel;
  }
  async getClassByUserJoined(idUser: string) {
    try {
      const obj: any = {
        idUser: idUser,
        status: DFStatus.Active,
      };
      const members = await this.findAll(obj);
      return members.map((e) => e.idClass);
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'getClassByUserJoined-MemberClassService',
      );
      return null;
    }
  }
  async joinClass(idUser: string, idClass: string, role = 0) {
    try {
      const obj: any = {
        idUser: idUser,
        idClass: idClass,
        role: role,
      };
      const exitsClass = await this.findOne(obj);
      if (!exitsClass) {
        const model = MemberClasses.createModel(obj);
        const newMember = await this.create(model);
        if (newMember) {
          return this.cvtJSON(newMember) as MemberClasses;
        }
        return null;
      }
      throw new UserNotFoundException('You have to join into layer');
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'joinClass-MemberClassService',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  async leaveClass(idUser: string, idClass: string) {
    try {
      const obj: any = {
        idUser: idUser,
        idClass: idClass,
      };

      const classes = await this._model.findOneAndRemove(obj);
      if (classes) {
        return true;
      }
      return false;
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'leaveClass-MemberClassService',
      );
      throw new Error2SchoolException(e.message);
    }
  }
  async getMemberByClass(idClass: string, status = 1) {
    try {
      const obj: any = {
        idClass: idClass,
        status: status,
      };

      const memberClass = await this._model.find(obj).lean();
      if (memberClass.length > 0) {
        const results = await Promise.all(
          memberClass.map(async (e) => {
            try {
              return {
                user: await this._userService.findByIdAndImage(e.idUser),
                role: e.role,
              };
            } catch (e) {
              return e.id;
            }
          }),
        );

        return this.cvtJSON(results);
      }
      return [];
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'leaveClass-MemberClassService',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  async getMemberNotifyByClass(idClass: string, status = 1) {
    try {
      const obj: any = {
        idClass: idClass,
        status: status,
        role: 0,
      };

      const memberClass = await this._model.find(obj).select('idUser').lean();

      return this.cvtJSON(memberClass);
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'leaveClass-MemberClassService',
      );
      throw new Error2SchoolException(e.message);
    }
  }
}
