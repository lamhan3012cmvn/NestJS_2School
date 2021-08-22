import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
// import { AwsS3Service } from './services/aws-s3.service';
import { ConfigService } from './services/config.service';
// import { GeneratorService } from './services/generator.service';
import { LoggerService } from './services/logger.service';
// import { ValidatorService } from './services/validator.service';

const providers = [
  ConfigService,
  LoggerService,
  // ValidatorService,
  // AwsS3Service,
  // GeneratorService,
];

@Global()
@Module({
  providers,
  imports: [HttpModule],
  exports: [...providers, HttpModule],
})
export class SharedModule {}
