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
    console.log(
      `LHA:  ===> file: device.service.ts ===> line 21 ===> payload`,
      payload,
    );
    try {
      const newDevice = Device.createModel(payload);
      const result = await this.create(newDevice);
      return JSON.parse(JSON.stringify(result)) as Device;
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
      const listDevice: Array<string> = [];
      for (const id of ids) {
        const device = await this.findOne({
          createdBy: id,
        });
        if (device) {
          listDevice.push(device.fcmToken);
        }
      }
      console.log(
        `LHA:  ===> file: device.service.ts ===> line 72 ===> listDevice`,
        listDevice,
      );

      const tokens = [
        'cK8t4Px6Qz6UZqd2D6x5Tp:APA91bGwLlG0YvAw7HMIrrEhOGyZf_Nf89vpnsiCY6CRDXwKY5Vn_BZ4GPWTIk8R0PKt_iQBBE6gbT6P4o_ADZbFGTtvzd456Rmf0fV5rAwJ2V6rlR5IP40k7H_MYIsgQIu09YrhcnCa',
        // "cvUk11YpSRaWl1S_74LOP3:APA91bEl9aJKUcYjw42_EfoYLvN1B7JKUqFJfLQGO7SX6iw72x__2NrQtduENMbTsmCrN8BuXaUQLsMT90Mr_dsyTCzG7Osgk6GKcNfaU89gjIv7XGJLqIStTX8AzZ_fRVzgPikqYcm6",
      ];
      const payload: any = {
        notification: {
          title: 'Hồng Vinh đã gửi cho bạn một tin nhắn',
          body: 'Im Mobile Developer...',
          image: 'https://avatars.githubusercontent.com/u/60530946?v=4',
        },
        data: {
          id: 'lambiengco12313de',
          invitation: 'hehe',
          startTime: '2021-07-30T02:40:38.448Z',
          avatar: 'https://avatars.githubusercontent.com/u/60530946?v=4',
          route: 'conversation',
          fullname: 'Dao Hong Vinh',
          username: 'lambiengcode',
        },
        token: tokens,
      };
      fire
        .messaging()
        .send(payload)
        .then((response) => {
          console.log('Successfully sent message:', response);
        })
        .catch(function (error) {
          console.error('Error sending message:', error);
        });
      // fire.messaging().sendToDevice([])

      // const result = await fire.messaging().sendToDevice(listDevice, payload);
      // console.log('Successfully sent message:', result);
    } catch (e) {
      this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
    }
  }
}
