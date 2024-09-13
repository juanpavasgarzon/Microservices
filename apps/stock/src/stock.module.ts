import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { RabbitModule } from '@app/shared';
import { DatabaseModule } from '@app/shared/modules/database.module';

@Module({
  imports: [
    RabbitModule.registerRmq('SECURITY', 'SECURITY_QUEUE'),
    DatabaseModule.registerSchemas([]),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
