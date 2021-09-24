import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategy } from './strategy/local.strategy';
import { ConfigModule } from 'apps/share/configService.module';
import { ConfigService } from 'apps/share/services/config.service';
import { setupJWT } from 'apps/share/jwt/setupJwt';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { Auth, AuthSchema } from './entities/auth.entity';
import { AuthController } from './controller/auth.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    // PassportModule,
    ConfigModule,
    JwtModule.registerAsync(setupJWT('JWT_SECRET')),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, ConfigService],
})
export class AuthModule {}

// setupJWT
