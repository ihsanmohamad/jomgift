import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GiftsModule } from './gifts/gifts.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    GiftsModule,
    EventsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}