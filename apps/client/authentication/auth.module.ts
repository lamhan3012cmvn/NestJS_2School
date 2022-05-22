import { UpLoadFileService } from './../up-load-file/services/up-load-file.service';
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
import { Admin, AdminSchema } from '../admin/entities/admin.entity';
import { PassportModule } from '@nestjs/passport';
import { UpLoadFile } from '../up-load-file/entities/upLoadFile.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Auth.name, schema: AuthSchema },
      { name: Admin.name, schema: AdminSchema },
      { name: User.name, schema: UserSchema },
      { name: UpLoadFile.modelName, schema: UpLoadFile.model.schema },
    ]),
    ConfigModule,
    JwtModule.registerAsync(setupJWT('JWT_SECRET')),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    ConfigService,
    LoggerService,
    UpLoadFileService,
  ],
  // exports: [PassportModule, JwtModule],
})
export class AuthModule {}
