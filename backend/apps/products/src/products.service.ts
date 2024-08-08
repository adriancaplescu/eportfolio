import { Injectable } from '@nestjs/common';
import {
  CreateProductDto,
  Product,
  ProductsRepository,
  UpdateProductDto,
} from '@app/common';

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

  async findOneProduct(id: number) {
    return this.productsRepository.findOne({ id });
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.findOneAndUpdate({ id }, updateProductDto);
  }
}
