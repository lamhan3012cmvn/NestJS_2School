import { Device } from './entities/device.entity';
import { Module } from '@nestjs/common';
import { DeviceService } from './services/device.service';
import { DeviceController } from './controllers/device.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Device.modelName, schema: Device.model.schema },
    ]),
  ],
  controllers: [DeviceController],
  providers: [DeviceService],
  exports: [DeviceService],
})
export class DeviceModule {}
