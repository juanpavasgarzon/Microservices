import { DynamicModule, Module, Provider } from '@nestjs/common';
import { RabbitAccessor } from '@app/shared/accessors/rabbit.accessor';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' })],
  providers: [RabbitAccessor],
  exports: [RabbitAccessor],
})
export class RabbitModule {
  static registerRmq(service: string, queue: string): DynamicModule {
    const providers: Provider[] = [
      {
        provide: service,
        useFactory: (rabbitAccessor: RabbitAccessor) => {
          const options = rabbitAccessor.getRmqOptions(queue);
          return ClientProxyFactory.create(options);
        },
        inject: [RabbitAccessor],
      },
    ];

    return {
      module: RabbitModule,
      providers,
      exports: providers,
    };
  }
}
