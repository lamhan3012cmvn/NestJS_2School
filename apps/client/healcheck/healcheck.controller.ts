import { Controller, Get } from '@nestjs/common';

@Controller('healcheck')
export class HealcheckController {
  @Get()
  private healcheck() {
    return 'App run success v4';
  }
}
