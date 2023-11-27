import { Test, TestingModule } from '@nestjs/testing';
import { PatreonService } from './patreon.service';

describe('PatreonService', () => {
  let service: PatreonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatreonService],
    }).compile();

    service = module.get<PatreonService>(PatreonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
