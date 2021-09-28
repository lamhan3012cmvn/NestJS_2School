import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from 'apps/share/services/config.service';
import { UserService } from 'apps/client/user/service/user.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any, done: (error: Error, user: any | false) => any) {
    console.log('JWT Strategy', payload);
    const user = await this.authService.validateUser({ id: payload.data });
    console.log(
      `LHA:  ===> file: jwt.strategy.ts ===> line 24 ===> user`,
      user,
    );
    if (user) {
      done(null, user);
    }
    return done(new UnauthorizedException(), false);
  }
}
