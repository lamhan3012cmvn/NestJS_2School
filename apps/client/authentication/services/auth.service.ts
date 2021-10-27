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
@Injectable()
export class AuthService extends ResponseService {
  constructor(
    @InjectModel(Auth.name)
    private accountModel: Model<Auth>,
    @InjectModel(User.name)
    private userModel: Model<User>,
    private configService: ConfigService,
    private loggerService: LoggerService,
    private jwtService: JwtService,
  ) {
    super();
  }
  jwtSecret(): string {
    return this.configService.get('JWT_SECRET');
  }
  async validateUser(payload: any): Promise<User> {
    console.log(
      `LHA:  ===> file: auth.service.ts ===> line 28 ===> payload`,
      payload,
    );
    const user = await this.userModel.findOne({ createdBy: payload.id }).lean();
    console.log(
      `LHA:  ===> file: auth.service.ts ===> line 33 ===> user`,
      user,
    );
    return user;
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
