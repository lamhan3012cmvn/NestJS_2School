import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';
import { ISchemaUser, User } from 'apps/client/user/entities/user.entity';
import { BaseController, Ok } from 'apps/share/controller/baseController';
import { HostName } from 'apps/share/decorator/host.decorator';
import { DFStatus } from 'apps/share/enums/status.enum';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { LoggerService } from 'apps/share/services/logger.service';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { JoinClassQuery } from '../dto/joinClass/query.dto';
import { UpdateImageDto } from '../dto/updateImage/req,dto';
import { ClassService } from '../services/class.service';
import { TransactionService } from 'apps/client/transaction/services/transaction.service';
import * as mongoose from 'mongoose';

@Controller('api/classes')
export class ClassController extends BaseController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly classService: ClassService,
    private readonly uploadService: UpLoadFileService,
    private readonly transactionService: TransactionService,
  ) {
    super();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Usr() user: User & { _id: string },
    @Body() createClassDto: CreateClassDto,
  ) {
    try {
      const result = await this.classService.createClasses(
        user._id,
        createClassDto,
      );
      if (result) {
        return new Ok('Create Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }
  @Patch()
  @UseGuards(JwtAuthGuard)
  async update(
    @Usr() user: User & { _id: string },
    @Query() query,
    @Body() updateClassDto: any,
  ) {
    try {
      const obj = {
        ...updateClassDto,
      };
      if (obj['setOfQuestionShare']) {
        obj['setOfQuestionShare'] = obj['setOfQuestionShare'].map(
          (item) => new mongoose.Types.ObjectId(item),
        );
      }

      const result = await this.classService.findOneAndUpdate(
        { createdBy: user._id, _id: query.id },
        obj,
      );
      if (result) {
        const cloneClass = this.classService.cvtJSON(result);
        if (cloneClass.image) {
          const image = await this.uploadService.findById(cloneClass.image);
          cloneClass.image = image.path || '';
        }
        return new Ok('Update Class success', cloneClass);
      }
      throw new ResourceFoundException('Dont find Class Update');
    } catch (e) {
      this.loggerService.error(e.message, null, 'Update-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch('image')
  @UseGuards(JwtAuthGuard)
  async updateImage(
    @Usr() user: User & { _id: string },
    @Query() query,
    @Body() updateClassDto: UpdateImageDto,
  ) {
    try {
      console.log('run hre');
      const result = await this.classService.findOneAndUpdate(
        { createdBy: user._id, _id: query.id },
        updateClassDto,
      );
      if (result) {
        const cloneClass = this.classService.cvtJSON(result);
        if (cloneClass.image) {
          const image = await this.uploadService.findById(cloneClass.image);
          cloneClass.image = image?.path || '';
        }
        return new Ok('Update Class Image success', cloneClass);
      }
      throw new ResourceFoundException('Dont Find Class Update Image');
    } catch (e) {
      this.loggerService.error(e.message, null, 'Update-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@HostName() host, @Usr() user: User & { _id: string }) {
    try {
      const result = await this.classService.findAllClasses(
        user,
        {
          limit: '15',
          skip: '0',
        },
        host,
      );
      if (result) {
        return new Ok('Get Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('admin')
  // @UseGuards(JwtAuthGuard)
  async findAllAdmin() {
    try {
      const result = await this.classService.findAllAdminClasses(
        {},
        {
          limit: '15',
          skip: '0',
        },
      );
      if (result) {
        return new Ok('Get Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('members')
  @UseGuards(JwtAuthGuard)
  async getMemberClass(@Query() query: { idClass: string }) {
    try {
      const result = await this.classService.findAllMemberClass(query.idClass);
      if (result) {
        return new Ok('Get Class success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('changeStatus')
  @UseGuards(JwtAuthGuard)
  async changeStatusClass(@Usr() user: User, @Query() query) {
    try {
      const result = await this.classService.update(query.id, {
        status: DFStatus[DFStatus[query?.status || 0]],
      });
      if (result) {
        return new Ok('Get Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException('Change Status False');
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'changeStatus-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('changeStatus/admin')
  // @UseGuards(JwtAuthGuard)
  async changeStatusClassAdmin(@Query() query) {
    try {
      console.log('query', query);
      const result = await this.classService.update(query.id, {
        status: DFStatus[DFStatus[query?.status || 0]],
      });
      if (result) {
        return new Ok('Get Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException('Change Status False');
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'changeStatus-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('joinMember')
  @UseGuards(JwtAuthGuard)
  async joinMemberClass(@Usr() user: ISchemaUser, @Body() payload: any) {
    try {
      const result = await this.classService.joinMemberClass(
        user._id,
        payload.idClass,
      );
      if (result) {
        const currentClass = await this.classService.findById(payload.idClass);
        const objSender = {
          class: new mongoose.Types.ObjectId(currentClass._id),
          sender: new mongoose.Types.ObjectId(user._id),
          receiver: currentClass.createdBy,
          senderPhone: payload?.senderPhone || null,
          content: payload?.content || null,
          systemContent: `${user.displayName} đã thanh toán khóa học ${currentClass.name}`,
          amount: payload?.amount || null,
        };

        const objReceiver = {
          class: new mongoose.Types.ObjectId(currentClass._id),
          receiver: currentClass.createdBy,
          content: payload?.content || null,
          systemContent: `${user.displayName} thanh toán khóa học ${currentClass.name} của mình.`,
          amount: payload?.amount || null,
        };
        const transactionSenderPromise =
          this.transactionService.createTransaction(objSender);
        const transactionReceiver =
          this.transactionService.createTransaction(objReceiver);

        const createTransaction = await Promise.all([
          transactionSenderPromise,
          transactionReceiver,
        ]);
        console.log('createTransaction', createTransaction);
        return new Ok('Join Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'joinMember-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }
  @Delete('leaveClass')
  @UseGuards(JwtAuthGuard)
  async leaveClass(@Usr() user: ISchemaUser, @Query() payload: any) {
    try {
      const result: boolean = await this.classService.leaveMemberClass(
        user._id,
        payload.idClass,
      );
      if (result) {
        return new Ok('Leave Class success', this.classService.cvtJSON(result));
      } else {
        return new Ok(
          'Dont Find Member Leave success',
          this.classService.cvtJSON(result),
        );
      }
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'Leave-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('recommendClasses')
  @UseGuards(JwtAuthGuard)
  async recommendClasses(
    @Usr() user: ISchemaUser,
    // @Body() payload: JoinClassQuery,
  ) {
    try {
      const result = await this.classService.recommendClasses(user._id);
      if (result) {
        return new Ok('Join Class success', this.classService.cvtJSON(result));
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'joinMember-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }
}
// recommendClasses
