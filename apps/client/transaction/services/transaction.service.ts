import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'apps/share/services/baseService.service';
import { LoggerService } from 'apps/share/services/logger.service';
import { ModelType } from 'typegoose';
import { Transaction } from '../entities/transaction.entity';

@Injectable()
export class TransactionService extends BaseService<Transaction> {
  constructor(
    @InjectModel(Transaction.modelName)
    private readonly _transactionModel: ModelType<Transaction>,
    private readonly _loggerService: LoggerService,
  ) {
    super();
    this._model = _transactionModel;

  }
  async createTransaction(messageDto: any): Promise<Transaction> {
    try {
      const obj: any = { ...messageDto };
      const newTransactionModel = Transaction.createModel(obj);

      const newTransaction = await this.create(newTransactionModel);

      return newTransaction
    } catch (e) {
      console.log(e);
      this._loggerService.error(e.message, null, 'CREATE-TransactionService');
      return null;
    }
  }
}
