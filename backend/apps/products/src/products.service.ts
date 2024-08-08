import { Injectable } from '@nestjs/common';
import { CreateProductDto, Product, ProductsRepository } from '@app/common';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  getHello(): string {
    return 'Hello World!!';
  }

  async createProduct(createProductDto: CreateProductDto) {
    const product = new Product({ ...createProductDto });

    return this.productsRepository.create(product);
  }

  async findAllProducts() {
    return this.productsRepository.find({});
  }
}
