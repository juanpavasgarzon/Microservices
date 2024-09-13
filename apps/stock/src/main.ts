import { NestFactory } from '@nestjs/core';
import { StockModule } from './stock.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RabbitAccessor } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(StockModule);
  const rabbitAccessor = app.get(RabbitAccessor);
  const options = rabbitAccessor.getRmqOptions('STOCK_QUEUE');
  app.connectMicroservice<MicroserviceOptions>(options);
  await app.startAllMicroservices();
}

bootstrap().then(() => console.log('Done'));
