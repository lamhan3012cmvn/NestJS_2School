import { IQueryFind } from './../../../share/interfaces/query.interface';
import { LoggerService } from '../../../share/services/logger.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResponseService } from '../../../share/services/respone.service';
import { Model } from 'mongoose';
import { ISchemaUser, User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/updateUser/res.dto';
import { UpdateAvatarDto } from '../dto/updateAvatar/res.dto';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';

@Injectable()
export class UserService extends ResponseService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private loggerService: LoggerService,
    private uploadService: UpLoadFileService,
  ) {
    super();
  }
  // async create(createUserDto: CreateUserDto) {
  //   try {
  //     const user = new this.userModel({ createUserDto });
  //     await user.save();
  //     return this.ResponseServiceSuccess(user);
  //   } catch (e) {
  //     this.loggerService.error(e.message, null, 'create-UserService');
  //     return null;
  //   }
  // }

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
  async findByIdAndImage(id: string) {
    try {
      const user = await this.userModel.findOne({ createdBy: id }).lean();

      if (user) {
        if (!!user.image) {
          const image = await this.uploadService.findById(user.image);
          user.image = image.path;
        }
        return user;
      }
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'findById-UserService');
      return null;
    }
  }

  async findOne(payload: ISchemaUser) {
    try {
      const user = await this.userModel.findOne(payload).lean();
      if (user) return this.ResponseServiceSuccess(user);
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'findOne-UserService');
      return null;
    }
  }

  async update(id: string, payload: UpdateUserDto) {
    try {
      const obj: any = { ...payload };
      obj.displayName = payload.firstName + ' ' + payload.lastName;
      const user = await this.userModel
        .findOneAndUpdate({ createdBy: id }, obj, { new: true })
        .lean();
      if (user) return this.ResponseServiceSuccess(user);
      return null;
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'findOne-UserService');
      return null;
    }
  }
  async updateAvatar(id: string, payload: UpdateAvatarDto) {
    try {
      const obj: any = { ...payload };
      const user = await this.userModel
        .findOneAndUpdate({ createdBy: id }, obj, { new: true })
        .lean();

      // uploadService
      if (user) return this.ResponseServiceSuccess(user);
      return null;
    } catch (e) {
      console.log(e);
      this.loggerService.error(e.message, null, 'findOne-UserService');
      return null;
    }
  }
}
