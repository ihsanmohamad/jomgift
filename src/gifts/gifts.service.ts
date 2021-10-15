import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Gift } from '@prisma/client';
import { CreateGiftInput, UpdateGiftInput  } from 'src/graphql';
@Injectable()
export class GiftsService {
  constructor(private prisma: PrismaService) {};
  async create(createGiftInput: CreateGiftInput) {
    const { name, events } = createGiftInput;
    return this.prisma.gift.create({
      data: {
        ...(name && {name}),
        events: {
          create: [
            {
              event: {
                create: {
                  name: 'test',
                  description: 'hehe'
                }
              }
            }
          ]
        }
      }

    })
  }

  async gifts(): Promise<Gift[]> {
    return this.prisma.gift.findMany();
  }

  async gift(id: number) {
    return this.prisma.gift.findUnique({
      where: {id},
    });
  }

  async update(id: number, updateGiftInput: UpdateGiftInput) {
    return this.prisma.gift.update({
      data: updateGiftInput,
      where: {id}
    });
  }

  async remove(id: number) {
    return this.prisma.gift.delete({
      where: {
        id: id
      }
    });
  }
}
