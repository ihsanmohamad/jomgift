import { Test, TestingModule } from '@nestjs/testing';
import { GiftsResolver } from './gifts.resolver';
import { GiftsService } from './gifts.service';

describe('GiftsResolver', () => {
  let resolver: GiftsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftsResolver, GiftsService],
    }).compile();

    resolver = module.get<GiftsResolver>(GiftsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
