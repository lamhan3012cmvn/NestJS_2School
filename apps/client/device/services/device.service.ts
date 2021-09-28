import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { Device } from '../entities/device.entity';

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
  async createDevice(payload: Device) {
    try {
      const newDevice = Device.createModel(payload);
      const result = await this.create(newDevice);
      return JSON.parse(JSON.stringify(result)) as Device;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Remove-ClassesService');
    }
  }
  async updateDevice(id: string, payload: Device) {
    try {
      const newDevice = Device.createModel(payload);
      const result = await this.update(id, newDevice);
      return JSON.parse(JSON.stringify(result)) as Device;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Update-ClassesService');
    }
  }
  async findAllDevice(filter = {}) {
    try {
      const result = await this.findAll(filter);
      return JSON.parse(JSON.stringify(result)) as Device;
    } catch (e) {
      this._loggerService.error(e.message, null, 'Update-ClassesService');
    }
  }
}
