import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'apps/share/shared.module';
import { TransactionController } from './controllers/transaction.controller';
import { Transaction } from './entities/transaction.entity';
import { TransactionService } from './services/transaction.service';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: Transaction.modelName, schema: Transaction.model.schema },
    ])
  ],
  controllers: [TransactionController],
  providers: [
    TransactionService
  ],
  exports:[TransactionService]
})
export class TransactionModule {}
