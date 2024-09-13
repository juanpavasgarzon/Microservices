import { Injectable } from '@nestjs/common';
import { RmqOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RabbitAccessor {
  constructor(private readonly configService: ConfigService) {}

  getRmqOptions(queue: string): RmqOptions {
    const USER = this.configService.get('RABBITMQ_USER');
    const PASSWORD = this.configService.get('RABBITMQ_PASS');
    const HOST = this.configService.get('RABBITMQ_HOST');
    const PORT = this.configService.get('RABBITMQ_PORT');

    return {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${USER}:${PASSWORD}@${HOST}:${PORT}`],
        queue: queue,
        queueOptions: {
          durable: true,
        },
      },
    };
  }
}
