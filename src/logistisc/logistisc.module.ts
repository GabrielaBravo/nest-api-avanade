import { Module } from '@nestjs/common';
import { LogistiscService } from './logistisc.service';
import { LogistiscController } from './logistisc.controller';

@Module({
  controllers: [LogistiscController],
  providers: [LogistiscService]
})
export class LogistiscModule {}
