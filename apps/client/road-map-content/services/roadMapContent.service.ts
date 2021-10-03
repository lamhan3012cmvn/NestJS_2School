import { LoggerService } from './../../../share/services/logger.service';
import { RoadMapContent } from './../entities/roadMapContent.entity';
import { BaseService } from 'apps/share/services/baseService.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';

@Injectable()
export class RoadMapContentService extends BaseService<RoadMapContent> {
  constructor(
    @InjectModel(RoadMapContent.modelName)
    private readonly _setOfQuestionsModel: ModelType<RoadMapContent>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _setOfQuestionsModel;
  }
  async createRoadMapContent(
    createdBy: string,
    createDto,
  ): Promise<RoadMapContent> {
    try {
      const obj: any = { ...createDto };
      obj.createBy = createdBy;
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
}
