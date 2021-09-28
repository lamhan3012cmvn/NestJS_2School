import { ConfigService } from 'apps/share/services/config.service';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthenticationDto } from '../dto/login/req.dto';
import { ILoginSuccessAuthDto } from '../dto/login/resSuccess.dto';
import { AuthService } from '../services/auth.service';
import { User } from 'apps/client/user/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: authService.jwtSecret(),
    });
  }

  // async validate(
  //   payload: LoginAuthenticationDto,
  // ): Promise<ILoginSuccessAuthDto> {
  //   const user = await this.authService.login(
  //     payload.username,
  //     payload.password,
  //   );
  //   console.log(
  //     `LHA:  ===> file: authentication.local.strategy.ts ===> line 18 ===> user`,
  //     user,
  //   );
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
  async validate(
    payload: any,
    done: (error: Error, user: User | false) => any,
  ) {
    console.log(
      `LHA:  ===> file: local.strategy.ts ===> line 43 ===> payload`,
      payload,
    );
    // const user = null;
    const user = await this.authService.validateUser(payload);

    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}
