import { NestFactory } from '@nestjs/core';
import { InventoryModule } from './inventory.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RabbitAccessor } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(InventoryModule, {
    cors: true,
    logger: ['error', 'warn', 'fatal'],
  });

  const rabbitAccessor = app.get(RabbitAccessor);
  const options = rabbitAccessor.getRmqOptions('INVENTORY_QUEUE');
  app.connectMicroservice<MicroserviceOptions>(options);

  await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap().then(() => console.log('Done'));
