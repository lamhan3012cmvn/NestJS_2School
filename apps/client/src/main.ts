import { ClientModule } from './client.module';

import { HttpExceptionFilter } from 'apps/share/filters/http-exception.filter';
import { ConfigService } from 'apps/share/services/config.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { SharedModule } from 'apps/share/shared.module';
import { NestFactory, Reflector } from '@nestjs/core';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';

import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from 'apps/share/swagger/setup';
import { RedisIoAdapter } from '../socket/adapter/RedisIoAdapter';
import * as fire from 'firebase-admin';
import * as fs from 'fs';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(
      ClientModule,
      new ExpressAdapter(),
      {
        cors: true,
      },
    );

    const loggerService = app.select(SharedModule).get(LoggerService);
    app.useLogger(loggerService);

    app.use(helmet());
    // app.use(
    //   rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 minutes
    //     max: 100, // limit each IP to 100 requests per windowMs
    //   }),
    // );

    const reflector = app.get(Reflector);

    app.useGlobalFilters(new HttpExceptionFilter(loggerService));
    app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        validationError: {
          target: false,
        },
      }),
    );

    app.useWebSocketAdapter(new RedisIoAdapter(app));

    const configService = app.select(SharedModule).get(ConfigService);
    const adminConfig = fs.readFileSync('./serviceAccountKey.json', 'utf8');
    fire.initializeApp({
      credential: fire.credential.cert(JSON.parse(adminConfig)),
    });

    if (['development', 'staging'].includes(configService.nodeEnv)) {
      setupSwagger(app, configService.swaggerConfig);
    }

    const port = configService.getNumber('PORT') || 3000;
    const host = configService.get('HOST') || '127.0.0.1';
    await app.listen(port, host);

    loggerService.warn(`server running on port ${host}:${port}`);
  } catch (err) {
    console.error(err);
  }
}
bootstrap();
