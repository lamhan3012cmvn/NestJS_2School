import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { UserMemberSocket } from '../entities/userSocket.entity';

@Injectable()
export class UserMemberSocketService extends BaseService<UserMemberSocket> {
  constructor(
    @InjectModel(UserMemberSocket.modelName)
    private readonly _userMemberSocket: ModelType<UserMemberSocket>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _userMemberSocket;
  }

  async createMemberSocket(payload): Promise<UserMemberSocket> {
    try {
      const obj: any = { ...payload };
      const model = UserMemberSocket.createModel(obj);

      const newUserHost = await this.create(model);
      if (newUserHost) {
        return this.cvtJSON(newUserHost) as UserMemberSocket;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-UserHostSocketService',
      );
      return null;
    }
  }

  async findOneAndRemove(payload): Promise<boolean> {
    try {
      const obj: any = { ...payload };

      const rmMember = await this._userMemberSocket.findOneAndRemove(obj);
      if (rmMember) {
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      this._loggerService.error(
        e.message,
        null,
        'CREATE-UserHostSocketService',
      );
      return false;
    }
  }
}
