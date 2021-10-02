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
}
