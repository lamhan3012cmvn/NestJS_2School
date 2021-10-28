import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { AuthService } from '../authentication/services/auth.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class WsJwtGuard implements CanActivate {
  // private logger: Logger = new Logger(WsJwtGuard.name);

  constructor(
    private readonly authService: AuthService,
    private readonly jwt: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      console.log('Midderware');
      const client: Socket = context.switchToWs().getClient<Socket>();
      console.log(client.handshake?.headers);
      const authToken: any = client.handshake?.headers?.authorization;
      console.log(
        `LHA:  ===> file: socket.wsJwtGuard.ts ===> line 22 ===> authToken`,
        authToken,
      );
      const encodeJWT = await this.jwt.verifyAsync(authToken);
      console.log(
        `LHA:  ===> file: socket.wsJwtGuard.ts ===> line 22 ===> encodeJWT`,
        encodeJWT,
      );
      const user: User = await this.authService.validateUser({
        id: encodeJWT.data,
      });
      context.switchToHttp().getRequest().user = user;

      return Boolean(user);
    } catch (err) {
      throw new WsException(err.message);
    }
  }
}