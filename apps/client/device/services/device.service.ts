import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { Device } from '../entities/device.entity';
import * as fire from 'firebase-admin';
import { MessagingPayload } from 'firebase-admin/lib/messaging/messaging-api';

@Injectable()
export class DeviceService extends BaseService<Device> {
  constructor(
    @InjectModel(Device.modelName)
    private readonly _deviceModel: ModelType<Device>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _deviceModel;
  }
  async createDevice(payload: any) {
    try {
      const device = await this.findOne({
        createdBy: payload.createdBy,
        deviceUUid: payload.deviceUUid,
      });
      if (device) {
        const result = await this.findOneAndUpdate(
          {
            createdBy: payload.createdBy,
            deviceUUid: payload.deviceUUid,
          },
          {
            fcmToken: payload.fcmToken,
          },
        );
        return JSON.parse(JSON.stringify(result)) as Device;
      } else {
        const newDevice = Device.createModel(payload);
        const result = await this.create(newDevice);
        return JSON.parse(JSON.stringify(result)) as Device;
      }
    } catch (e) {
      this._loggerService.error(e.message, null, 'createDevice-DeviceService');
    }
  }
  async updateDevice(id: string, payload: Device) {
    try {
      const newDevice = Device.createModel(payload);
      const result = await this.update(id, newDevice);
      return JSON.parse(JSON.stringify(result)) as Device;
    } catch (e) {
      this._loggerService.error(e.message, null, 'updateDevice-DeviceService');
    }
  }
  async findAllDevice(filter = {}) {
    try {
      const result = await this.findAll(filter);
      return JSON.parse(JSON.stringify(result)) as Device;
    } catch (e) {
      this._loggerService.error(e.message, null, 'findAllDevice-DeviceService');
    }
  }
  async pushDevice(id: string, payload: MessagingPayload) {
    try {
      const device = await this.findOne({
        createdBy: id,
      });
      if (!device) {
        this._loggerService.error(
          'Dont find device',
          null,
          'pushDevice-DeviceService',
        );
        return;
      }
      // fire.messaging().sendToDevice([])
      const data = Promise.all([
        await fire.messaging().sendToDevice(device.fcmToken, payload),
      ]);
      console.log('Successfully sent message:', data);
    } catch (e) {
      this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
    }
  }

  async pushDevices(ids: Array<string>, payload: MessagingPayload) {
    try {
      let listDevice: Array<string> = [];
      for (const id of ids) {
        const device = (await this.findAll({
          createdBy: id,
        })) as Device[];
        if (device) {
          listDevice = [...listDevice, ...device.map((e) => e.fcmToken)];
        }
      }
      console.log(
        `LHA:  ===> file: device.service.ts ===> line 72 ===> listDevice`,
        listDevice,
      );

      const tokens = [
        'cK8t4Px6Qz6UZqd2D6x5Tp:APA91bHxAB4fu4lkssgRPW1CpRUIjreiyPWHNjWlCGY-nZDwYGKcbGQGmIgtnAbr3vmKRYFNdriBcbP-LU0U016JzjbCuf81uC_ZzXAh1K_Qd4ZXyE9udlam-3911brIvVgmm6RbafxL',
        // "cvUk11YpSRaWl1S_74LOP3:APA91bEl9aJKUcYjw42_EfoYLvN1B7JKUqFJfLQGO7SX6iw72x__2NrQtduENMbTsmCrN8BuXaUQLsMT90Mr_dsyTCzG7Osgk6GKcNfaU89gjIv7XGJLqIStTX8AzZ_fRVzgPikqYcm6",
      ];
      // const payload: any = {
      //   notification: {
      //     title: 'Hồng Vinh đã gửi cho bạn một tin nhắn',
      //     body: 'Im Mobile Developer...',
      //     image: 'https://avatars.githubusercontent.com/u/60530946?v=4',
      //   },
      //   data: {
      //     id: 'lambiengco12313de',
      //     invitation: 'hehe',
      //     startTime: '2021-07-30T02:40:38.448Z',
      //     avatar: 'https://avatars.githubusercontent.com/u/60530946?v=4',
      //     route: 'conversation',
      //     fullname: 'Dao Hong Vinh',
      //     username: 'lambiengcode',
      //   },
      //   // token: tokens,
      // };
      // fire
      //   .messaging()
      //   .send(payload)
      //   .then((response) => {
      //     console.log('Successfully sent message:', response);
      //   })
      //   .catch(function (error) {
      //     console.error('Error sending message:', error);
      //   });
      const result = await fire.messaging().sendToDevice(listDevice, payload);
      console.log(
        `LHA:  ===> file: device.service.ts ===> line 120 ===> result`,
        result,
      );

      // const result = await fire.messaging().sendToDevice(listDevice, payload);
      // console.log('Successfully sent message:', result);
    } catch (e) {
      this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
    }
  }
}
