import { Product } from 'apps/inventory/src/domain/product/product.entity';

export interface ProductRepositoryInterface {
  get(): Promise<Product[]>;

  getById(id: number): Promise<Nullable<Product>>;

  update(id: number, data: Product): Promise<void>;

  save(data: Product): Promise<void>;
}
