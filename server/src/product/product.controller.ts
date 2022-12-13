import { Controller } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  User as UserModel,
  Product as ProductModel,
  Prisma,
} from '@prisma/client';

@Controller('product')
export class ProductController 
constructor(private readonly prismaService: PrismaService) {}
}
