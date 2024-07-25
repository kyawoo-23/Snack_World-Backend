import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishlistProductService } from './wishlist-product.service';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('wishlist-product')
@Controller('wishlist-product')
export class WishlistProductController {
  constructor(
    private readonly wishlistProductService: WishlistProductService,
  ) {}

  @Post()
  create(@Body() createWishlistProductDto: CreateWishlistProductDto) {
    return this.wishlistProductService.create(createWishlistProductDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.wishlistProductService.findAll(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistProductService.remove(id);
  }
}
