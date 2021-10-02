import { LoggerService } from './../../../share/services/logger.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { ModelType } from 'typegoose';
import { RoadMap } from '../entities/road-map.entity';

@Injectable()
export class RoadMapService extends BaseService<RoadMap> {
  constructor(
    @InjectModel(RoadMap.modelName)
    private readonly _roadMapModel: ModelType<RoadMap>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _roadMapModel;
  }
}
