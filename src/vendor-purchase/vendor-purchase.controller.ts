import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  Headers,
} from '@nestjs/common';
import { VendorPurchaseService } from './vendor-purchase.service';
import { CreateVendorPurchaseDto } from 'src/vendor-purchase/dto/create-vendor-purchase.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

@ApiTags('vendor-purchase')
@Controller('vendor-purchase')
export class VendorPurchaseController {
  constructor(private readonly vendorPurchaseService: VendorPurchaseService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createVendorPurchaseDto: CreateVendorPurchaseDto) {
    createVendorPurchaseDto.vendorUserId = req.user.id;
    return this.vendorPurchaseService.create(createVendorPurchaseDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Headers('Vendor') vendorId: string) {
    return this.vendorPurchaseService.findAll(vendorId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorPurchaseService.findOne(id);
  }
}
