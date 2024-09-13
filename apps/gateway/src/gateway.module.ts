import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { RabbitModule } from '@app/shared';

@Module({
  imports: [
    RabbitModule.registerRmq('SECURITY', 'SECURITY_QUEUE'),
    RabbitModule.registerRmq('INVENTORY', 'INVENTORY_QUEUE'),
    RabbitModule.registerRmq('STOCK', 'STOCK_QUEUE'),
  ],
  controllers: [GatewayController],
  providers: [
    {
      provide: 'GatewayService',
      useClass: GatewayService,
    },
  ],
})
export class GatewayModule {}
