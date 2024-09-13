import { Product } from 'apps/inventory/src/domain/product/product.entity';
import { EntitySchema } from 'typeorm';

export const ProductSchema = new EntitySchema<Product>({
  name: 'products',
  target: Product,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
  },
});
