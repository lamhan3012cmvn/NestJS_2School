import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoadMapService } from './road-map.service';
import { CreateRoadMapDto } from './dto/create-road-map.dto';
import { UpdateRoadMapDto } from './dto/update-road-map.dto';

@Controller('road-map')
export class RoadMapController {
  constructor(private readonly roadMapService: RoadMapService) {}

  @Post()
  create(@Body() createRoadMapDto: CreateRoadMapDto) {
    return this.roadMapService.create(createRoadMapDto);
  }

  @Get()
  findAll() {
    return this.roadMapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roadMapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoadMapDto: UpdateRoadMapDto) {
    return this.roadMapService.update(+id, updateRoadMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roadMapService.remove(+id);
  }
}
