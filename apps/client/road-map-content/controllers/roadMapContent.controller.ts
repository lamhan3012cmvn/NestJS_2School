import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { LoggerService } from 'apps/share/services/logger.service';
import { RoadMapContentService } from '../services/roadMapContent.service';
import { User } from 'apps/client/user/entities/user.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { ApiBaseResponse, Ok } from 'apps/share/controller/baseController';

@Controller('road-map-content')
export class RoadMapContentController {
  constructor(
    private readonly roadMapContentService: RoadMapContentService,
    private readonly loggerService: LoggerService,
  ) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createRoadMap(@Usr() user: User, @Body() createRoadMap) {
    try {
      const result = await this.roadMapContentService.createRoadMapContent(
        user.createdBy,
        createRoadMap,
      );
      if (result) {
        return new Ok(
          'Create RoadMap success',
          this.roadMapContentService.cvtJSON(result),
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
    @Body() updateRoadMap,
  ) {
    try {
      const result = await this.roadMapContentService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        updateRoadMap,
      );
      if (result) {
        return new Ok(
          'Update RoadMap success',
          this.roadMapContentService.cvtJSON(result),
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
  async changeRoadMap(@Usr() user: User, @Query() query) {
    try {
      const result = await this.roadMapContentService.findOneAndUpdate(
        { createBy: user.createdBy, _id: query.id },
        { status: ~~query.status },
      );
      if (result) {
        return new Ok(
          'Delete RoadMap success',
          this.roadMapContentService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'Delete-RoadMapController');
      throw new Error2SchoolException(e.message);
    }
  }
}
