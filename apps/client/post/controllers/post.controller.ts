import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { Usr } from 'apps/client/authentication/decorator/user.decorator';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';
import { Ok } from 'apps/share/controller/baseController';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { IQueryFind } from 'apps/share/interfaces/query.interface';
import { PostService } from '../services/post.service';
import { LoggerService } from './../../../share/services/logger.service';
import { MemberClassService } from './../../memberClass/services/memberClass.service';
import { User } from './../../user/entities/user.entity';

@Controller('api/post')
export class PostController {
  constructor(
    private readonly _postService: PostService,
    private readonly _memberClass: MemberClassService,
    private readonly _loggerService: LoggerService,
    private readonly _uploadService: UpLoadFileService,
  ) {}

  // @Post()
  // @UseGuards(JwtAuthGuard)
  // async create(
  //   @Usr() user: User & { _id: string },
  //   @Body() createMessage: any,
  // ) {
  //   try {
  //     const result = await this._postService.createPostWithRmc({
  //       ...createMessage,
  //       sender: user._id,
  //     });
  //     if (result) {
  //       return new Ok('Create Class success', result);
  //     }
  //     throw new ResourceFoundException();
  //   } catch (e) {
  //     this.loggerService.error(e.message, null, 'create-ClassController');
  //     throw new Error2SchoolException(e.message);
  //   }
  // }

  @Get('/home')
  @UseGuards(JwtAuthGuard)
  async getPostHomePage(
    @Usr() user: User & { _id: string },
    @Query() query: IQueryFind,
  ) {
    try {
      const memberClass = await this._memberClass.findAllNoSkip({
        user: user._id,
      });
      const idClass = memberClass.map((e) => e.idClass);
      const result = await this._postService.findAll(
        {
          class: { $in: idClass },
        },
        query,
        [
          {
            path: 'class',
            populate: 'createdBy',
          },
          {
            path: 'roadMapContent',
            populate: 'rmcFile rmcAssignment rmcAttendance',
          },
        ],
      );

      const addImagePath = [];
      for (const current of JSON.parse(JSON.stringify(result as Array<any>))) {
        const clonePost = { ...current };
        if (current?.class?.image && current?.class?.image !== '') {
          const image = await this._uploadService.findById(current.class.image);
          clonePost.class.image = image.path || '';
        }
        addImagePath.push(clonePost);
      }

      if (addImagePath) {
        return new Ok('Get Message success', addImagePath);
      }
      throw new ResourceFoundException({
        message: 'Get Message fail',
      });
    } catch (e) {
      this._loggerService.error(e.message, null, 'get-PostController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get('/class/:idClass')
  @UseGuards(JwtAuthGuard)
  async getPostInClass(
    @Usr() user: User & { _id: string },
    @Param('idClass') idClass: string,
    @Query() query: IQueryFind,
  ) {
    try {
      const result = await this._postService.findAll(
        {
          class: idClass,
        },
        query,
        [
          {
            path: 'class',
            populate: 'createdBy',
          },
          {
            path: 'roadMapContent',
            populate: 'rmcFile rmcAssignment rmcAttendance',
          },
        ],
      );
      const addImagePath = [];
      for (const current of JSON.parse(JSON.stringify(result as Array<any>))) {
        const clonePost = { ...current };
        if (current?.class?.image && current?.class?.image !== '') {
          const image = await this._uploadService.findById(current.class.image);
          clonePost.class.image = image.path || '';
        }
        addImagePath.push(clonePost);
      }

      if (addImagePath) {
        return new Ok('Get Message success', addImagePath);
      }
      throw new ResourceFoundException({
        message: 'Get Message fail',
      });
    } catch (e) {
      this._loggerService.error(e.message, null, 'get-PostController');
      throw new Error2SchoolException(e.message);
    }
  }
}
