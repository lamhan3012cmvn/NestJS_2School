import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from 'apps/share/services/config.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ResponseService } from 'apps/share/services/respone.service';
import { JwtService } from '@nestjs/jwt';
import { Auth, IAuth } from '../entities/auth.entity';
@Injectable()
export class AuthService extends ResponseService {
  constructor(
    @InjectModel(Auth.name)
    private accountModel: Model<Auth>,
    private configService: ConfigService,
    private loggerService: LoggerService,
    private jwtService: JwtService,
  ) {
    super();
  }

  async login(username: string, password: string): Promise<any> {
    try {
      const user = await this.accountModel.findOne({ username: username });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = this.jwtService.sign({
            data: user._id,
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

  async register(username: string, password: string): Promise<IAuth> {
    try {
      const newPassword = await this.genPassword(password);
      const newUser = new this.accountModel({
        username,
        password: newPassword,
      });
      await newUser.save();
      return this.ResponseServiceSuccess(newUser);
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
