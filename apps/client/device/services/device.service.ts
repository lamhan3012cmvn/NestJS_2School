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
      const listDevice = [];
      for (const id of ids) {
        const device = await this.findOne({
          createdBy: id,
        });
        if (device) {
          listDevice.push(device.fcmToken);
        }
      }
      // fire.messaging().sendToDevice([])

      const result = await fire.messaging().sendToDevice(listDevice, payload);
      console.log('Successfully sent message:', result);
    } catch (e) {
      this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
    }
  }
}
