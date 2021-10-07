import { Module } from '@nestjs/common';
import { HealcheckController } from './healcheck.controller';

@Module({
  controllers: [HealcheckController],
})
export class HealcheckModule {}
