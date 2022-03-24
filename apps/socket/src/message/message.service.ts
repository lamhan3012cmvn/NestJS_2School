import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'apps/share/services/logger.service';
import { AnyRecord } from 'dns';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  constructor(
    // private _loggerService: LoggerService,
    private httpService: HttpService,
  ) {}
  async getMessageDetail(idMessage: string): Promise<Observable<any>> {
    try {
      const result = await this.httpService.get(
        'http://localhost:3000/api/message/' + idMessage,
      );
      return result;
    } catch (e) {
      console.log(e);
      // this._loggerService.error(e.message, null, 'CREATE-ClassesService');
      return null;
    }
  }
}
