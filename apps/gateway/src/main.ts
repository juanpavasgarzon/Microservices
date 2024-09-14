import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule, {
    cors: true,
    logger: ['error', 'warn', 'fatal'],
  });

  app.enableVersioning({ type: VersioningType.HEADER, header: 'X-Version' });
  await app.listen(3000);
}

bootstrap().then(() => console.log('Done'));
