import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { RoadMapService } from './../services/roadMap.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { CreateRoadMapDto } from '../dto/CreateRoadMap/res.dto';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { ApiBaseResponse, Ok } from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';

@Controller('road-map')
export class RoadMapController {
  constructor(
    private readonly roadMapService: RoadMapService,
    private readonly loggerService: LoggerService,
  ) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Usr() user: User, @Body() createRoadMap: CreateRoadMapDto) {
    try {
      const result = await this.roadMapService.createRoadMap(
        user.createdBy,
        createRoadMap,
      );
      if (result) {
        return new Ok('Create RoadMap success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      return new ApiBaseResponse(500);
    }
  }
}
