import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthenticationDto } from '../dto/login/req.dto';
import { ILoginSuccessAuthDto } from '../dto/login/resSuccess.dto';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    payload: LoginAuthenticationDto,
  ): Promise<ILoginSuccessAuthDto> {
    const user = await this.authService.login(
      payload.username,
      payload.password,
    );
    console.log(
      `LHA:  ===> file: authentication.local.strategy.ts ===> line 18 ===> user`,
      user,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
