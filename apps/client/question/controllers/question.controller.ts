import { Usr } from '../../authentication/decorator/user.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Header,
  UseGuards,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { User } from 'apps/client/user/entities/user.entity';
import { ResourceFoundException } from 'apps/share/exceptions/resource.exception';
import { QuestionService } from '../services/question.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { Ok } from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';
import { query } from 'winston';
import { CreateQuestionDto } from '../dto/CreateQuestion/res.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import * as FileType from 'file-type';
import { parse } from 'path';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';
import { encodeImageToBlurhash } from 'apps/share/helpers/blurHash';
import * as mongoose from 'mongoose';

@Controller('api/question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly upLoadFileService: UpLoadFileService,
    private readonly loggerService: LoggerService,
  ) {}
  @Post()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('banner', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          if (!fs.existsSync('./public/uploads')) {
            fs.mkdirSync('./public/uploads');
          }
          const path = `./public/uploads/${randomName}`;

          const parseFile = parse(file.originalname);
          if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
          }
          cb(null, `${randomName}/${parseFile.name}${parseFile.ext}`);
        },
      }),
    }),
  )
  async createQuestion(
    @Usr() user: User & { _id: string },
    @Body() payload: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      let singleFile = null;
      let blurHash = null;
      if (file) {
        const parseFile = parse(file.originalname);

        singleFile = await this.upLoadFileService.createUploadFile(
          parseFile.name,
          file.path,
        );
        blurHash = await encodeImageToBlurhash(file.path);
        console.log('singleFile', singleFile);
      }
      // throw new ResourceFoundException();

      const result = await this.questionService.createQuestion(user._id, {
        ...payload,
        answers: Array.isArray(payload.answers)
          ? payload.answers
          : payload.answers.split(','),
        correct: Array.isArray(payload.correct)
          ? payload.correct
          : payload.correct.split(','),
        banner: singleFile ? new mongoose.Types.ObjectId(singleFile.id) : null,
        blurHash: blurHash,
      });
      if (result) {
        return new Ok('Create Question success', result);
      }
      throw new ResourceFoundException();
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'create-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Patch()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async updateQuestion(
    @Usr() user: User & { _id: string },
    @Query() query,
    @Body() payload: any,
  ) {
    try {
      const result = await this.questionService.findOneAndUpdate(
        { createBy: user._id, _id: query.id },
        payload,
      );
      if (result) {
        return new Ok(
          'Create Class success',
          this.questionService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async getQuestionBySetOf(
    @Usr() user: User & { _id: string },
    @Query() query,
  ) {
    try {
      const result = await this.questionService.findAll(
        {
          createBy: user._id,
          idSetOfQuestions: query.idSetOfQuestions,
        },
        { limit: query?.limit || 16, skip: query?.skip || 0 },
        'banner',
      );
      const sortData = result.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      if (sortData) {
        return new Ok(
          'Create Question success',
          this.questionService.cvtJSON(sortData),
        );
      }
      throw new ResourceFoundException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Delete()
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async deleteQuestion(@Usr() user: User & { _id: string }, @Query() query) {
    try {
      const result = await this.questionService.deleteQuestion(
        query.id,
        user._id,
      );
      if (result) {
        return new Ok('Delete Question success', result);
      }
      throw new ResourceFoundException('Dont Find question change status');
    } catch (e) {
      this.loggerService.error(e.message, null, 'Delete-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }

  @Delete('hidden')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Header('Content-Type', 'application/json')
  async changeStatusQuestion(
    @Usr() user: User & { _id: string },
    @Query() query,
  ) {
    try {
      const result = await this.questionService.findOneAndUpdate(
        {
          createBy: user._id,
          _id: query.id,
        },
        { status: query.status },
      );
      if (result) {
        return new Ok(
          'Delete Question success',
          this.questionService.cvtJSON(result),
        );
      }
      throw new ResourceFoundException('Dont Find question change status');
    } catch (e) {
      this.loggerService.error(e.message, null, 'Delete-QuestionController');
      throw new Error2SchoolException(e.message);
    }
  }
}
