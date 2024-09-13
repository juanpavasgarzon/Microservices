import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

export interface GatewayServiceInterface {
  getHello(): string;
}

@Injectable()
export class GatewayService implements GatewayServiceInterface {
  constructor(
    @Inject('SECURITY') private readonly securityProxy: ClientProxy,
    @Inject('INVENTORY') private readonly inventoryProxy: ClientProxy,
    @Inject('STOCK') private readonly stockProxy: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
