import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DeviceService } from 'apps/client/device/services/device.service';
import { UpLoadFileService } from 'apps/client/up-load-file/services/up-load-file.service';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { MessagingPayload } from 'firebase-admin/lib/messaging/messaging-api';
import { ModelType } from 'typegoose';
import { Notification } from '../entities/notification.entity';

@Injectable()
export class NotificationService extends BaseService<Notification> {
  constructor(
    @InjectModel(Notification.modelName)
    private readonly _notificationModel: ModelType<Notification>,
    private readonly _loggerService: LoggerService,
    private readonly _deviceService: DeviceService,
    private readonly _uploadFileService: UpLoadFileService,
  ) {
    super();
    this._model = _notificationModel;
  }
  async getNotification(id: string): Promise<Array<Notification>> {
    const notifications = await this._model
      .find({
        idUser: id,
        isSeen: false,
      })
      .sort({ createdAt: -1 })
      .lean();
    const results = [];
    for (const notification of notifications) {
      const obj = { ...this.cvtJSON(notification) };
      const image = await this._uploadFileService.findById(notification.image);
      obj.image = image?.path || '';
      results.push(obj);
    }
    return results;
  }

  async getNotificationCount(id: string): Promise<number> {
    const notifications = await this._model.find({
      idUser: id,
      isSeen: false,
    });
    return notifications.length;
  }

  async createNotification(notification: any): Promise<void> {
    // push notify
    // const obj: any = { ...notification };
    const model = Notification.createModel(notification);
    const newNotification = await this.create(model);
    if (newNotification) {
      this._loggerService.info(`Create new notification success`);
      //Notify

      const bodyNoti: MessagingPayload = {
        notification: {
          title: 'Bài kiểm tra mới',
          body: 'Bạn có bài kiểm tra mới',
        },
        data: this.cvtJSON(newNotification),
      };
      this._deviceService.pushDevice(notification.idUser, bodyNoti);
    } else {
      this._loggerService.error(`Create new notification failed`);
    }
  }
}
