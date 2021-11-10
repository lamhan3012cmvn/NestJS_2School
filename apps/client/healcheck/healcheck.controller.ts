import { Controller, Get, Post } from '@nestjs/common';
import * as fire from 'firebase-admin';
@Controller('healcheck')
export class HealcheckController {
  @Get()
  private healcheck() {
    return 'App run success v5';
  }

  @Get('/post')
  private async healcheckPost() {
    const fcm = await fire.messaging().sendToDevice('asd', {
      notification: {
        title: 'asd',
        body: 'asd',
      },
    });
    console.log(
      `LHA:  ===> file: healcheck.controller.ts ===> line 18 ===> fcm`,
      fcm,
    );
    return 'App run success v4';
  }
}
