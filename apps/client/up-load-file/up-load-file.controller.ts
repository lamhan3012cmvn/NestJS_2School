import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { parse } from 'path';
import * as fs from 'fs';

@Controller('api/up-load-file')
export class UpLoadFileController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
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
  uploadFile(@UploadedFiles() file: Express.Multer.File) {
    console.log(file);
  }

  // @UseInterceptors(
  //   FilesInterceptor('image', 20, {
  //     storage: diskStorage({
  //       destination: './files',
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //   }),
  // )

  @Post('uploads')
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
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
  }
}
