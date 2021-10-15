import { CreateGiftInput } from './create-gift.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGiftInput extends PartialType(CreateGiftInput) {
  id: number;
}
