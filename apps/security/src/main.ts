import { NestFactory } from '@nestjs/core';
import { SecurityModule } from './security.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { RabbitAccessor } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(SecurityModule);
  const rabbitAccessor = app.get(RabbitAccessor);
  const options = rabbitAccessor.getRmqOptions('SECURITY_QUEUE');
  app.connectMicroservice<MicroserviceOptions>(options);
  await app.startAllMicroservices();
}

bootstrap().then(() => console.log('Done'));
