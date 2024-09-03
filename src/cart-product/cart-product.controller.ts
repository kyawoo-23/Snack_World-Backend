import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CreateCartProductDto } from './dto/create-cart-product.dto';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('cart-product')
@Controller('cart-product')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createCartProductDto: CreateCartProductDto) {
    createCartProductDto.customerId = req.user.id;
    return this.cartProductService.create(createCartProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    return this.cartProductService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('count')
  count(@Req() req) {
    return this.cartProductService.count(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartProductDto: Prisma.CartProductUpdateInput,
  ) {
    return this.cartProductService.update(id, updateCartProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('remove-all')
  removeAll(@Req() req) {
    return this.cartProductService.removeAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartProductService.remove(id);
  }
}
