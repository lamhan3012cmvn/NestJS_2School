import { Injectable } from '@nestjs/common';
import { CreateRoadMapDto } from './dto/create-road-map.dto';
import { UpdateRoadMapDto } from './dto/update-road-map.dto';

@Injectable()
export class RoadMapService {
  create(createRoadMapDto: CreateRoadMapDto) {
    return 'This action adds a new roadMap';
  }

  findAll() {
    return `This action returns all roadMap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roadMap`;
  }

  update(id: number, updateRoadMapDto: UpdateRoadMapDto) {
    return `This action updates a #${id} roadMap`;
  }

  remove(id: number) {
    return `This action removes a #${id} roadMap`;
  }
}
