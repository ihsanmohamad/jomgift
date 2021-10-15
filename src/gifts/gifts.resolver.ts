import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GiftsService } from './gifts.service';
import { CreateGiftInput } from './dto/create-gift.input';
import { UpdateGiftInput } from './dto/update-gift.input';

@Resolver('Gift')
export class GiftsResolver {
  constructor(private readonly giftsService: GiftsService) {}

  @Mutation('createGift')
  create(@Args('createGiftInput') createGiftInput: CreateGiftInput) {
    return this.giftsService.create(createGiftInput);
  }

  @Query('gifts')
  async findAll() {
    return this.giftsService.gifts();
  }

  @Query('gift')
  findOne(@Args('id') id: number) {
    return this.giftsService.gift(id);
  }

  @Mutation('updateGift')
  update(@Args('updateGiftInput') updateGiftInput: UpdateGiftInput) {
    return this.giftsService.update(updateGiftInput.id, updateGiftInput);
  }

  @Mutation('removeGift')
  remove(@Args('id') id: number) {
    this.giftsService.remove(id);
    return "Gift Deleted";
  }
}
