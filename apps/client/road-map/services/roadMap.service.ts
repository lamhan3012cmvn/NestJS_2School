import { LoggerService } from './../../../share/services/logger.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { ModelType } from 'typegoose';
import { RoadMap } from '../entities/road-map.entity';
import { CreateRoadMapDto } from '../dto/CreateRoadMap/res.dto';

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

  async createRoadMap(
    createdBy: string,
    createDto: CreateRoadMapDto,
  ): Promise<RoadMap> {
    try {
      const obj: any = { ...createDto };
      obj.createBy = createdBy;
      const newRoadMap = RoadMap.createModel(obj);

      const roadMapS = await this.create(newRoadMap);
      if (roadMapS) {
        return this.cvtJSON(roadMapS) as RoadMap;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }
}
