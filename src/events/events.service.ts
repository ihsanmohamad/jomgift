import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Event } from '@prisma/client'
import { CreateEventInput, UpdateEventInput } from 'src/graphql';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService){};
  create(createEventInput: CreateEventInput) {
    const { name, description, gifts} = createEventInput;
    return this.prisma.gift.create({
      data: createEventInput
    });
  }

  async events(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async event(id: number) {
    return this.prisma.event.findUnique({
      where: {id}
    });
  }

  async update(id: number, updateEventInput: UpdateEventInput) {
    return this.prisma.event.update({
      data: updateEventInput,
      where: {id}
    });
  }

  async remove(id: number) {
    return this.prisma.event.delete({
      where: {
        id: id
      }
    });
  }
}
