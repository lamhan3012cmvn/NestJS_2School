import { Controller, Get } from '@nestjs/common';

@Controller('healcheck')
export class HealcheckController {
  @Get()
  healcheck() {
    return 'App run success v3';
  }
}
