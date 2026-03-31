import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { initialData } from './data/seed-data';
import { Product } from 'src/product/entities';


@Injectable()
export class SeedService {
  constructor( private readonly productService: ProductService) {}
  
  async runSeed () {
    await this.insertNewProducts()

    return "SEED EXCUTED";
  }

  private async insertNewProducts() {
    await this.productService.deleteAllProducts()

    const products = initialData.products;
const insertPromises = products.map(product => this.productService.create(product))
  
  await Promise.all(insertPromises)

    return true;
}
}