import { RMCFile } from './entities/rmc-files';
import { RMCAttendances } from './entities/rmc-attendances';
import { LoggerService } from './../../share/services/logger.service';
import { Module } from '@nestjs/common';
import { RoadMapContentService } from './services/roadMapContent.service';
import { RoadMapContentController } from './controllers/roadMapContent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoadMapContent } from './entities/roadMapContent.entity';
import { RMCAssignmentService } from './services/rmc-assignments.service';
import { RMCAssignmentUserService } from './services/rmc-assignmentsUserservice';
import { RMCAttendanceService } from './services/rmc-attendances.service';
import { RMCAttendancesUserService } from './services/rmc-attendancesUser.service';
import { RMCFilesService } from './services/rmc-files.service';
import { RMCAssignment } from './entities/rmc-assignments';
import { RMCAttendancesUser } from './entities/rmc-attendancesUser';
import { RMCAssignmentUser } from './entities/rmc-assignmentsUser';
import { ClassService } from '../class/services/class.service';
import { Classes } from '../class/entities/class.entity';
import { ClassModule } from '../class/class.module';

@Module({
  imports: [
    ClassModule,
    MongooseModule.forFeature([
      { name: RoadMapContent.modelName, schema: RoadMapContent.model.schema },
      { name: RMCAssignment.modelName, schema: RMCAssignment.model.schema },
      { name: RMCAttendances.modelName, schema: RMCAttendances.model.schema },
      {
        name: RMCAssignmentUser.modelName,
        schema: RMCAssignmentUser.model.schema,
      },
      {
        name: RMCAttendancesUser.modelName,
        schema: RMCAttendancesUser.model.schema,
      },
      {
        name: RMCFile.modelName,
        schema: RMCFile.model.schema,
      },
      { name: Classes.modelName, schema: Classes.model.schema },
    ]),
  ],
  controllers: [RoadMapContentController],
  providers: [
    // ClassService,
    LoggerService,
    RoadMapContentService,
    RMCAssignmentService,
    RMCAssignmentUserService,
    RMCAttendanceService,
    RMCAttendancesUserService,
    RMCFilesService,
  ],
})
export class RoadMapContentModule {}
