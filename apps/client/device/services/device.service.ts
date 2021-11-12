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
      const newDevice = Device.createModel({ ...payload });
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
        createBy: id,
      });
      if (!device) {
        this._loggerService.error(
          'Dont find device',
          null,
          'pushDevice-DeviceService',
        );
        return;
      }
      fire.messaging().sendToDevice(device.fcmToken, payload);
    } catch (e) {
      this._loggerService.error(e.message, null, 'pushDevice-DeviceService');
    }
  }
}
