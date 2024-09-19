import { PartialType } from '@nestjs/swagger';
import { CreateVendorRemarkDto } from './create-vendor-remark.dto';

export class UpdateVendorRemarkDto extends PartialType(CreateVendorRemarkDto) {}
