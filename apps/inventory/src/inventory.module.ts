import { Module } from '@nestjs/common';
import { RabbitModule } from '@app/shared';
import { DatabaseModule } from '@app/shared/modules/database.module';
import { ProductSchema } from 'apps/inventory/src/infrastructure/product/product.schema';

@Module({
  imports: [
    RabbitModule.registerRmq('SECURITY', 'SECURITY_QUEUE'),
    RabbitModule.registerRmq('STOCK', 'STOCK_QUEUE'),
    DatabaseModule.registerSchemas([ProductSchema]),
  ],
  controllers: [],
  providers: [],
})
export class InventoryModule {}
