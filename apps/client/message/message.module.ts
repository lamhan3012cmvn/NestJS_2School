import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from 'apps/share/shared.module';
import { MessageController } from './controllers/message.controller';
import { Message } from './entities/message.entity';
import { MessageService } from './services/message.service';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      { name: Message.modelName, schema: Message.model.schema },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
