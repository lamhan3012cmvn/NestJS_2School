import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { Message } from '../entities/message.entity';

@Injectable()
export class MessageService extends BaseService<Message> {
  constructor(
    @InjectModel(Message.modelName)
    private readonly _messageModel: ModelType<Message>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _messageModel;
  }

  async getBaseModel(): Promise<Array<Message>> {
    return this._messageModel.find({}).populate('sender idClass').lean();
  }

  async createMessage(messageDto: any): Promise<Message> {
    try {
      const obj: any = { ...messageDto };
      const newMessageModel = Message.createModel(obj);

      const newMessage = await this.create(newMessageModel);

      if (newMessage) {
        return this.cvtJSON(newMessage) as Message;
      }
      return null;
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }
}
