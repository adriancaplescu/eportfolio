import { DatabaseModule, Product, ProductsRepository } from '@app/common';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Product])],

  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
