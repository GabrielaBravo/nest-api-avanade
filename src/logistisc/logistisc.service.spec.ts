import { Test, TestingModule } from '@nestjs/testing';
import { LogistiscService } from './logistisc.service';

describe('LogistiscService', () => {
  let service: LogistiscService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogistiscService],
    }).compile();

    service = module.get<LogistiscService>(LogistiscService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
