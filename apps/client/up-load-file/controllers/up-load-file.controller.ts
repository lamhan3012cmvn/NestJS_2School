import { Ok } from 'apps/share/controller/baseController';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { parse, join } from 'path';
import * as fs from 'fs';
import * as FileType from 'file-type';
import { LoggerService } from 'apps/share/services/logger.service';
import { UpLoadFileService } from '../services/up-load-file.service';
import { Error2SchoolException } from 'apps/share/exceptions/errors.exception';
import { JwtAuthGuard } from 'apps/client/authentication/guard/jwt-auth.guard';
import { encodeImageToBlurhash } from 'apps/share/helpers/blurHash';

@Controller('api/up-load-file')
export class UpLoadFileController {
  constructor(
    private readonly _upLoadFileService: UpLoadFileService,
    private readonly loggerService: LoggerService,
  ) {}
  @Post('upload')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          if (!fs.existsSync('./uploads')) {
            fs.mkdirSync('./uploads');
          }
          const path = `./uploads/${randomName}`;

          const parseFile = parse(file.originalname);
          if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
          }
          cb(null, `${randomName}/${parseFile.name}${parseFile.ext}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const parseFile = parse(file.originalname);

      const result = await this._upLoadFileService.createUploadFile(
        parseFile.name,
        file.path,
      );
      const blurHash = await encodeImageToBlurhash(file.path);
      return new Ok('Upload file Success', {
        image: result.id,
        blurHash: blurHash,
      });
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-uploadFile');
      throw new Error2SchoolException(e.message);
    }
  }

  @Post('uploads')
  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          console.log(file);
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          const path = `./uploads/${randomName}`;

          const parseFile = parse(file.originalname);
          if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
          }
          cb(null, `${randomName}/${parseFile.name}${parseFile.ext}`);
        },
      }),
    }),
  )
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    try {
      const result = [];
      for (const file of files) {
        const parseFile = parse(file.originalname);

        const res = await this._upLoadFileService.createUploadFile(
          parseFile.name,
          file.path,
        );
        result.push(res);
      }
      return new Ok('Upload file Success', result);
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-uploadFile');
      throw new Error2SchoolException(e.message);
    }
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  async getFile(@Query() query, @Res() res) {
    // const imagePath = join(__dirname, query.id);
    try {
      const buffer = fs.readFileSync(`./${query.id}`);
      console.log("buffer",buffer)
      const typeFile = await FileType.fromBuffer(buffer);
      res.writeHead(200, { 'Content-Type': typeFile.mime });
      res.end(buffer, 'binary');
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-uploadFile');
      throw new Error2SchoolException(e.message);
    }
  }
}
