import { Logger, UseGuards } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { WsJwtGuard } from './socket.wsJwtGuard';

type typeSocket = Socket & { user: any };
@WebSocketGateway({ cors: true })
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // constructor() {}

  @WebSocketServer() private server: Server;
  private logger: Logger = new Logger('MessageGateway');

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  @UseGuards(WsJwtGuard)
  async handleDisconnect(client: typeSocket) {
    // const results = await this._userMemberSocketService.findOneAndRemove({
    //   userId: client.user._id,
    // });
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @UseGuards(WsJwtGuard)
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
