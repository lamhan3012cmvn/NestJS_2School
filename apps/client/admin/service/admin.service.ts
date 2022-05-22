import { IQueryFind } from '../../../share/interfaces/query.interface';
import { LoggerService } from '../../../share/services/logger.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResponseService } from '../../../share/services/respone.service';
import { Model } from 'mongoose';
import { Admin, AdminSchema } from '../entities/admin.entity';

import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';

@Injectable()
export class AdminService extends ResponseService {
  constructor(
    @InjectModel(Admin.name)
    private userModel: Model<Admin>,
    private loggerService: LoggerService,
    private uploadService: UpLoadFileService,
  ) {
    super();
  }
  async create(createUserDto: any) {
    try {
      const user = new this.userModel({ createUserDto });
      await user.save();
      return this.ResponseServiceSuccess(user);
    } catch (e) {
      this.loggerService.error(e.message, null, 'create-UserService');
      return null;
    }
  }

  async findAll(query: IQueryFind) {
    try {
      const users = await this.userModel
        .find()
        .limit(+query.limit)
        .skip(+query.skip)
        .lean();
      return this.ResponseServiceSuccess(users);
    } catch (e) {
      this.loggerService.error(e.message, null, 'findAll-UserService');
      return null;
    }
  }

  async findById(id: string) {
    try {
      const user = await this.userModel.findById(id).lean();
      if (user) return this.ResponseServiceSuccess(user);
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserService');
      return null;
    }
  }


  async finOne(obj: any) {
    try {
      const user = await this.userModel.findOne(obj).lean();
      if (user) return this.ResponseServiceSuccess(user);
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserService');
      return null;
    }
  }
}
