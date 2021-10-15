import { Module } from '@nestjs/common';
import { GiftsService } from './gifts.service';
import { GiftsResolver } from './gifts.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GiftsResolver, GiftsService, PrismaService]
})
export class GiftsModule {}
