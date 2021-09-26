import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { ClassService } from '../services/class.service';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { UpdateClassDto } from '../dto/updateClass/update-class.dto';
import {
  ApiBaseResponse,
  BaseController,
} from 'apps/share/controller/baseController';
import { LoggerService } from 'apps/share/services/logger.service';

@Controller('api/classes')
export class ClassController extends BaseController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly classService: ClassService,
  ) {
    super();
  }

  @Post()
  async create(@Req() req, @Body() createClassDto: CreateClassDto) {
    try {
      console.log(req);
      // const result = await this.classService.create('', createClassDto);
      // this.resApi(null, 'Create Class success');
      // 12-alpine3.12
      throw new BadRequestException();
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-ClassController');
      return new ApiBaseResponse(500);
    }
    return this.classService.create('', createClassDto);
  }

  @Get()
  findAll() {
    throw new UnauthorizedException();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classService.update(+id, updateClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classService.remove(+id);
  }
}
