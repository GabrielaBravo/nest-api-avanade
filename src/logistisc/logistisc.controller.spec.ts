import { Test, TestingModule } from '@nestjs/testing';
import { LogistiscController } from './logistisc.controller';
import { LogistiscService } from './logistisc.service';

describe('LogistiscController', () => {
  let controller: LogistiscController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogistiscController],
      providers: [LogistiscService],
    }).compile();

    controller = module.get<LogistiscController>(LogistiscController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
