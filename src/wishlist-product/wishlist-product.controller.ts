import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { WishlistProductService } from './wishlist-product.service';
import { CreateWishlistProductDto } from './dto/create-wishlist-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('wishlist-product')
@Controller('wishlist-product')
export class WishlistProductController {
  constructor(
    private readonly wishlistProductService: WishlistProductService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req,
    @Body() createWishlistProductDto: CreateWishlistProductDto,
  ) {
    createWishlistProductDto.customerId = req.user.id;
    return this.wishlistProductService.create(createWishlistProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    return this.wishlistProductService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    return this.wishlistProductService.findOne(req.user.id, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistProductService.remove(id);
  }
}
