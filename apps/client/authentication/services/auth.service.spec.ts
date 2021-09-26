import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ConfigService } from '../../../share/services/config.service';
import { LoggerService } from '../../../share/services/logger.service';
import { ResponseService } from '../../../share/services/respone.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;
  let config: ConfigService;
  let log: LoggerService;
  let jwt: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, ConfigService, LoggerService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    config = module.get<ConfigService>(ConfigService);
    log = module.get<LoggerService>(LoggerService);
    jwt = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(config).toBeDefined();
    expect(log).toBeDefined();
    expect(jwt).toBeDefined();
  });
});
