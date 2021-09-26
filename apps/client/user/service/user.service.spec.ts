import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from '../../../share/services/logger.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let log: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, LoggerService],
    }).compile();

    service = module.get<UserService>(UserService);
    log = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(log).toBeDefined();
  });
});
