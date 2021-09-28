import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategy } from './strategy/local.strategy';
import { ConfigModule } from '../../share/configService.module';
import { ConfigService } from '../../share/services/config.service';
import { setupJWT } from '../../share/jwt/setupJwt';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { Auth, AuthSchema } from './entities/auth.entity';
import { AuthController } from './controller/auth.controller';
import { LoggerService } from '../../share/services/logger.service';
import { User, UserSchema } from '../user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Auth.name, schema: AuthSchema },
      { name: User.name, schema: UserSchema },
    ]),
    // PassportModule,
    ConfigModule,
    // PassportModule.register({
    //   defaultStrategy: 'jwt',
    //   property: 'user',
    //   session: false,
    // }),
    JwtModule.registerAsync(setupJWT('JWT_SECRET')),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    ConfigService,
    LoggerService,
  ],
  // exports: [PassportModule, JwtModule],
})
export class AuthModule {}
