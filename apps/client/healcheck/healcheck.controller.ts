import { UserScoreQuizSocketService } from './../socket/services/userScoreQuizSocket.service';
import { Controller, Get, Post } from '@nestjs/common';
import * as fire from 'firebase-admin';
@Controller('healcheck')
export class HealcheckController {
  constructor(private readonly _usq: UserScoreQuizSocketService) {}
  @Get()
  private healcheck() {
    return 'App run success v5';
  }

  @Get('/test')
  async test() {
    return this._usq.findScore('N5K2GGNA');
  }
}
