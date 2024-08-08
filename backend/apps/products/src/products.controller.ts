import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '@app/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getHello(): string {
    return this.productsService.getHello();
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get('find-all')
  async findAllProducts() {
    return this.productsService.findAllProducts();
  }
}
