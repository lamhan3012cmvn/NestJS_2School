import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AnyObject, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '../../../share/services/config.service';
import { LoggerService } from '../../../share/services/logger.service';
import { ResponseService } from '../../../share/services/respone.service';
import { JwtService } from '@nestjs/jwt';
import { Auth, IAuth } from '../entities/auth.entity';
import { User } from 'apps/client/user/entities/user.entity';
import {Admin} from 'apps/client/admin/entities/admin.entity'
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';
@Injectable()
export class AuthService extends ResponseService {
  constructor(
    @InjectModel(Auth.name)
    private accountModel: Model<Auth>,
    @InjectModel(User.name)
    private userModel: Model<User>,
    @InjectModel(Admin.name)
    private adminModel: Model<Admin>,
    private configService: ConfigService,
    private loggerService: LoggerService,
    private jwtService: JwtService,
    private upLoadFileService: UpLoadFileService,
  ) {
    super();
  }
  jwtSecret(): string {
    return this.configService.get('JWT_SECRET');
  }
  async validateUser(payload: any): Promise<User> {
    const user = await this.userModel.findOne({ createdBy: payload.id }).lean();
    const newUser = { ...user };
    if (newUser.image !== '') {
      const result = await this.upLoadFileService.findById(newUser.image);
      if (result) {
        newUser.image = result.path;
      }
    }
    return newUser;
  }
  
  async validateAdmin(payload: any): Promise<User> {
    const user = await this.adminModel.findOne({ createdBy: payload.id }).lean();
    const newUser = { ...user };
    if (newUser.image !== '') {
      const result = await this.upLoadFileService.findById(newUser.image);
      if (result) {
        newUser.image = result.path;
      }
    }
    return newUser;
  }

  async login(username: string, password: string): Promise<any> {
    try {
      const user = await this.accountModel.findOne({ username: username });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = this.jwtService.sign({
            data: {
              id:user._id,
              role:0
            },
          });
          return { token };
        }
        return null;
      }
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'LOGIN-Service');
      return null;
    }
  }

  async loginAdmin(username: string, password: string): Promise<any> {
    try {
      const AccountAdmin={
        username:"admin@gmail.com",
        password:"admin123cmvn"
      }

      const user = await this.accountModel.findOne({ username: username,role:1 });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = this.jwtService.sign({
            data:{
              id:user._id,
              role:1
            },
          });
          return { token };
        }
        return null;
      }
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'LOGIN-Service');
      return null;
    }
  }

  async register(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<any> {
    try {
      const newPassword = await this.genPassword(password);
      const newAccount = new this.accountModel({
        username,
        password: newPassword,
      });
      await newAccount.save();
      const newUser = new this.userModel({
        firstName,
        lastName,
        displayName: `${firstName} ${lastName}`,
        createdBy: newAccount._id,
      });
      await newUser.save();
      const token = this.jwtService.sign({
        data: newAccount._id,
      });
      return { token };
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Service');
      return null;
    }
  }

  async registerAdmin(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<any> {
    try {
      const newPassword = await this.genPassword(password);
      const newAccount = new this.accountModel({
        username,
        password: newPassword,
        role: 1
      });
      await newAccount.save();
      const newUser = new this.adminModel({
        firstName,
        lastName,
        displayName: `${firstName} ${lastName}`,
        createdBy: newAccount._id,
      });
      await newUser.save();
      const token = this.jwtService.sign({
        data: newAccount._id,
      });
      return { token };
    } catch (e) {
      this.loggerService.error(e.message, null, 'REGISTER-Service');
      return null;
    }
  }

  async forgotPassword(username: string, password: string): Promise<Auth> {
    try {
      const _password = await this.genPassword(password);
      const dataUpdate: any = {
        password: _password,
        verify: true,
      };
      const updateAccount = await this.updateAccount(username, dataUpdate);
      if (updateAccount) {
        return this.ResponseServiceSuccess(updateAccount);
      }
      return null;
    } catch (e) {
      this.loggerService.error(e.message, null, 'FORGOT-PASSWORD-Service');
      return null;
    }
  }
  private async genPassword(password): Promise<string> {
    const saltOrRounds = this.configService.get('SALT_OF_ROUNDS');
    const hash = await bcrypt.hash(password, ~~saltOrRounds);
    return hash;
  }

  private async updateAccount(username: string, payload: any): Promise<any> {
    try {
      const _account = await this.accountModel.findOneAndUpdate(
        { username: username },
        payload,
        { new: true },
      );
      return _account;
    } catch (e) {
      this.loggerService.error(e.message, null, 'UPDATE-ACCOUNT-Service');
      return null;
    }
  }
  async findAllUser() {
    const result = await this.accountModel.find().lean();
    return this.ResponseServiceSuccess(result);
  }
}
