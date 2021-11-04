import { QueryDeleteRoadMap } from './../dto/DeleteRoadMap/query.dto';
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
  Query,
  HttpCode,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { CreateRoadMapDto } from '../dto/CreateRoadMap/res.dto';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { ApiBaseResponse, Ok } from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';
import { UpdateRoadMap } from '../dto/UpdateRoadMap/res.dto';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';

@Controller('api/road-map')
export class RoadMapController {
  constructor(
    private readonly roadMapService: RoadMapService,
    private readonly loggerService: LoggerService,
  ) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createRoadMap(
    @Usr() user: User,
    @Query() query: { idClass: string },
    @Body() createRoadMap: CreateRoadMapDto,
  ) {
    try {
      const result = await this.roadMapService.createRoadMap(
        user.createdBy,
        query.idClass,
        createRoadMap,
      );
      if (result) {
        return new Ok(
          'Create RoadMap success',
          this.roadMapService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-RoadMapController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async updateRoadMap(
    @Usr() user: User,
    @Query() query,
    @Body() updateRoadMap: UpdateRoadMap,
  ) {
    try {
      const result = await this.roadMapService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        updateRoadMap,
      );
      if (result) {
        return new Ok(
          'Update RoadMap success',
          this.roadMapService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'update-RoadMapController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async changeRoadMap(@Usr() user: User, @Query() query: QueryDeleteRoadMap) {
    try {
      const result = await this.roadMapService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        { status: ~~query.status },
      );
      if (result) {
        return new Ok(
          'Delete RoadMap success',
          this.roadMapService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Delete-RoadMapController');
      throw new Error2SchoolException(e.message);
    }
  }
}
