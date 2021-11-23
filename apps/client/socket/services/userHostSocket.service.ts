import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { UserHostSocket } from '../entities/userHostSocket.entity';

@Injectable()
export class UserHostSocketService extends BaseService<UserHostSocket> {
  constructor(
    @InjectModel(UserHostSocket.modelName)
    private readonly _userHostSocket: ModelType<UserHostSocket>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _userHostSocket;
  }

  async createUserHostSocket(payload): Promise<UserHostSocket> {
    try {
      const obj: any = { ...payload };
      console.log(
        `LHA:  ===> file: userHostSocket.service.ts ===> line 22 ===> obj`,
        obj,
      );
      const model = UserHostSocket.createModel(obj);

      const newUserHost = await this.create(model);
      if (newUserHost) {
        return this.cvtJSON(newUserHost) as UserHostSocket;
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

  async removeUserHostSocket(
    idUser: string,
    idRoom: string,
  ): Promise<UserHostSocket> {
    try {
      await this._model.deleteOne({
        createBy: idUser,
        play: true,
        idRoom: idRoom,
      });
    } catch (e) {
      this._loggerService.error(
        e.message,
        null,
        'REMOVE-UserHostSocketService',
      );
      return null;
    }
  }
}
