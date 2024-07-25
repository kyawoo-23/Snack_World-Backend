import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cart-product')
@Controller('cart-product')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Post()
  create(@Body() createCartProductDto: CreateCartProductDto) {
    return this.cartProductService.create(createCartProductDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.cartProductService.findAll(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartProductDto: Prisma.CartProductUpdateInput,
  ) {
    return this.cartProductService.update(id, updateCartProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartProductService.remove(id);
  }

  @Delete(':id/remove-all')
  removeAll(@Param('id') id: string) {
    return this.cartProductService.removeAll(id);
  }
}
