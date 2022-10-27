import { Injectable } from '@nestjs/common';
import { CreateLogistiscDto } from './dto/create-logistisc.dto';
import { UpdateLogistiscDto } from './dto/update-logistisc.dto';

@Injectable()
export class LogistiscService {
  create(createLogistiscDto: CreateLogistiscDto) {
    return 'This action adds a new logistisc';
  }

  findAll() {
    return `This action returns all logistisc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logistisc`;
  }

  update(id: number, updateLogistiscDto: UpdateLogistiscDto) {
    return `This action updates a #${id} logistisc`;
  }

  remove(id: number) {
    return `This action removes a #${id} logistisc`;
  }
}
