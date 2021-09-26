import { Classes } from './../entities/class.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassDto } from '../dto/createClass/create-class.dto';
import { UpdateClassDto } from '../dto/updateClass/update-class.dto';
import { LoggerService } from 'apps/share/services/logger.service';
import { ResponseService } from 'apps/share/services/respone.service';

@Injectable()
export class ClassService extends ResponseService {
  constructor(
    @InjectModel(Classes.name)
    private classModel: Model<Classes>,
    private loggerService: LoggerService,
  ) {
    super();
  }
  async create(createBy: string, createClassDto: CreateClassDto) {
    try {
      const obj: any = { ...createClassDto };
      obj.createBy = createBy;
      const newClasses = new this.classModel(obj);
      await newClasses.save();
      if (newClasses) {
        return newClasses;
      }
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }

  findAll() {
    return `This action returns all class`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
