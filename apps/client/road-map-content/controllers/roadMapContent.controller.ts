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
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import {
  CreateRMCAssignmentDto,
  ICreateRMCAssignment,
} from '../dto/createRMCAssignment/req.dto';
import {
  CreateRMCAttendanceDto,
  ICreateRMCAttendance,
} from '../dto/createRMCAttendance/req.dto';
import { CreateRMCFileDto, ICreateRMCFile } from '../dto/createRMCFile/req.dto';
import { RCMTypes } from '../enum';
import { ClassService } from 'apps/client/class/services/class.service';
import { query } from 'winston';
import {
  IUpdateRMCAssignment,
  UpdateRMCAssignmentDto,
} from '../dto/updateRMCAssignment/req.dto';
import {
  IUpdateRMCAttendance,
  UpdateRMCAttendanceDto,
} from '../dto/updateRMCAttendance/req.dto';

@Controller('api/road-map-content')
export class RoadMapContentController {
  constructor(
    private readonly roadMapContentService: RoadMapContentService,
    private readonly loggerService: LoggerService,
    private readonly classService: ClassService,
  ) {}

  @Post('assignment')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createRMCAssignment(
    @Usr() user: User,
    @Query() query: { idClass: string; idRoadMap: string },
    @Body() payload: CreateRMCAssignmentDto,
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const payloadRMC: ICreateRMCAssignment = {
        ...payload,
        idRoadMap: query.idRoadMap,
        createdBy: user.createdBy,
        type: RCMTypes.ASSIGNMENT,
      };

      const result = await this.roadMapContentService.createRMCAssignment(
        payloadRMC,
      );
      if (result) {
        return new Ok(
          'Create RMC Assignment',
          this.roadMapContentService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(
        `LHA:  ===> file: roadMapContent.controller.ts ===> line 64 ===> e`,
        e,
      );
      this.loggerService.error(
        e.message,
        null,
        'create-RMCAssignmentController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('attendance')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createRMCAttendance(
    @Usr() user: User,
    @Query() query: { idClass: string; idRoadMap: string },
    @Body() payload: CreateRMCAttendanceDto,
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const payloadRMC: ICreateRMCAttendance = {
        ...payload,
        idRoadMap: query.idRoadMap,
        createdBy: user.createdBy,
        type: RCMTypes.ATTENDANCE,
      };
      const result = await this.roadMapContentService.createRMCAttendance(
        payloadRMC,
      );
      if (result) {
        return new Ok(
          'Create RMC Attendance',
          this.roadMapContentService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'create-RMCAttendanceController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('file')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async createRMCFile(
    @Usr() user: User,
    @Query() query: { idClass: string; idRoadMap: string },
    @Body() payload: CreateRMCFileDto,
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const payloadRMC: ICreateRMCFile = {
        ...payload,
        idRoadMap: query.idRoadMap,
        createdBy: user.createdBy,
        type: RCMTypes.ATTENDANCE,
      };
      const result = await this.roadMapContentService.createRMCFile(payloadRMC);
      if (result) {
        return new Ok(
          'Create RMC File',
          this.roadMapContentService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-RMCFileController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch('assignment')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async updateRMCAssignment(
    @Usr() user: User,
    @Query() query: { idClass: string; idRMC: string },
    @Body() payload: UpdateRMCAssignmentDto,
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const payloadRMC: IUpdateRMCAssignment = {
        ...payload,
      };
      const result = await this.roadMapContentService.updateRMCAssignment(
        query.idRMC,
        payloadRMC,
      );
      if (result) {
        return new Ok(
          'Update RMC Assignment',
          this.roadMapContentService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'update-RMCAssignmentController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch('attendance')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async updateRMCAttendance(
    @Usr() user: User,
    @Query() query: { idClass: string; idRMC: string },
    @Body() payload: UpdateRMCAttendanceDto,
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const payloadRMC: IUpdateRMCAttendance = {
        ...payload,
      };
      const result = await this.roadMapContentService.updateRMCAttendance(
        query.idRMC,
        payloadRMC,
      );
      if (result) {
        return new Ok(
          'Update RMC Attendance',
          this.roadMapContentService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'update-RMCAttendanceController',
      );
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

  @Delete('assignment')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async deleteRMCAssignment(
    @Usr() user: User,
    @Query() query: { idClass: string; idRMC: string },
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const result = await this.roadMapContentService.deleteRMCAssignment(
        query.idRMC,
      );
      if (result) {
        return new Ok('Delete RMC Assignment success', { success: true });
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'delete-RMCAssignmentController',
      );
      throw new Error2SchoolException(e.message);
    }
  }

  @Delete('attendance')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async deleteRMCAttendance(
    @Usr() user: User,
    @Query() query: { idClass: string; idRMC: string },
  ) {
    try {
      const hostClass = await this.classService.checkHostClass(
        user.createdBy,
        query.idClass,
      );
      if (!hostClass) {
        throw new ResourceFoundException(
          'The class you are trying to access does not exist',
        );
      }
      const result = await this.roadMapContentService.deleteRMCAttendance(
        query.idRMC,
      );
      if (result) {
        return new Ok('Delete RMC Attendance success', { success: true });
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(
        e.message,
        null,
        'delete-RMCAttendanceController',
      );
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
