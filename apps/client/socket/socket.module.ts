import { Module } from '@nestjs/common';
import { AppGateway } from './socket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway],
})
export class SocketModule {}
