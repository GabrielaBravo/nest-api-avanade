import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogistiscService } from './logistisc.service';
import { CreateLogistiscDto } from './dto/create-logistisc.dto';
import { UpdateLogistiscDto } from './dto/update-logistisc.dto';

@Controller('logistisc')
export class LogistiscController {
  constructor(private readonly logistiscService: LogistiscService) {}

  @Post()
  create(@Body() createLogistiscDto: CreateLogistiscDto) {
    return this.logistiscService.create(createLogistiscDto);
  }

  @Get()
  findAll() {
    return this.logistiscService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logistiscService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogistiscDto: UpdateLogistiscDto) {
    return this.logistiscService.update(+id, updateLogistiscDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logistiscService.remove(+id);
  }
}
