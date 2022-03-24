import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TerminusModule } from '@nestjs/terminus';
import { WsJwtGuard } from 'apps/socket/src/socket.wsJwtGuard';
import { ConfigModule } from 'apps/share/configService.module';
import { setupJWT } from 'apps/share/jwt/setupJwt';
import { SharedModule } from 'apps/share/shared.module';
import { MessageSocket } from './message.socket';
import { HttpModule } from '@nestjs/axios';
import { MessageService } from 'apps/socket/src/message/message.service';
import { LoggerService } from 'apps/share/services/logger.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    SharedModule,
    TerminusModule,
    ConfigModule,
    JwtModule.registerAsync(setupJWT('JWT_SECRET')),
  ],
  providers: [MessageService, MessageSocket, LoggerService, WsJwtGuard],
})
export class MessageModule {}
