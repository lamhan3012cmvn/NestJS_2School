import { Controller, Post, Body } from '@nestjs/common';
import { DeviceService } from '../services/device.service';

@Controller('api/device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  private create(@Body() createDeviceDto: any) {
    return this.deviceService.createDevice(createDeviceDto);
  }

  // @Get()
  // findAll() {
  //   return this.deviceService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.deviceService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDeviceDto: any) {
  //   return this.deviceService.update(+id, updateDeviceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.deviceService.remove(+id);
  // }
}
