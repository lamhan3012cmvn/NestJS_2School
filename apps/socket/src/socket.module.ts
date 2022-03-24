import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { WsJwtGuard } from 'apps/socket/src/socket.wsJwtGuard';
import { ConfigModule } from 'apps/share/configService.module';
import { setupJWT } from 'apps/share/jwt/setupJwt';
import { SharedModule } from 'apps/share/shared.module';
import { SocketController } from './socket.controller';
import { SocketService } from './socket.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    SharedModule,
    TerminusModule,
    ConfigModule,
    JwtModule.registerAsync(setupJWT('JWT_SECRET')),
    MessageModule,
  ],
  controllers: [SocketController],
  providers: [SocketService, WsJwtGuard],
})
export class SocketModule {}
