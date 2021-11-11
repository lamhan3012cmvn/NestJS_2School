import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from 'apps/share/services/config.service';
import { UserService } from 'apps/client/user/service/user.service';
import { AuthService } from '../services/auth.service';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
    private uploadFileService: UpLoadFileService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    payload: any,
    done: (error: Error, user: any | false) => any,
  ) {
    const user = await this.authService.validateUser({ id: payload.data });
    if (user) {
      if (!(user.image === '')) {
        const image = await this.uploadFileService.findById(user.image);
        if (image) {
          const link = image.path || '';
          user.image = link;
          console.log(user);
        }
      }
      done(null, user);
    }
    return done(new UnauthorizedException(), false);
  }
}
