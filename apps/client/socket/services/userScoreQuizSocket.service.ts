import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { UserScoreQuizSocket } from '../entities/userScoreQuizSocket.entity';

@Injectable()
export class UserScoreQuizSocketService extends BaseService<UserScoreQuizSocket> {
  constructor(
    @InjectModel(UserScoreQuizSocket.modelName)
    private readonly _userScoreQuizSocket: ModelType<UserScoreQuizSocket>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _userScoreQuizSocket;
  }
}
