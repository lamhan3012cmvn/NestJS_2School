import { Device, DeviceSchema } from './entities/device.entity';
import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }]),
  ],
  controllers: [DeviceController],
  providers: [DeviceService],
})
export class DeviceModule {}
