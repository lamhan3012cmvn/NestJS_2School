import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@Injectable()
export class WsJwtGuard implements CanActivate {
  // private logger: Logger = new Logger(WsJwtGuard.name);

  constructor(
    // private readonly authService: AuthService,
    private readonly jwt: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client: Socket = context.switchToWs().getClient<Socket>();
      const authToken: any = client.handshake?.headers?.authorization;
      const encodeJWT = await this.jwt.verifyAsync(authToken);
      // const user: User = await this.authService.validateUser({
      //   id: encodeJWT.data,
      // });
      // context.switchToHttp().getRequest().user = user;

      return Boolean(true);
    } catch (err) {
      throw new WsException(err.message);
    }
  }
}
