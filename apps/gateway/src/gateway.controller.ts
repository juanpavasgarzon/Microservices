import { Controller, Get, Inject } from '@nestjs/common';
import { GatewayServiceInterface } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(
    @Inject('GatewayService')
    private readonly gatewayService: GatewayServiceInterface,
  ) {}

  @Get()
  getHello(): string {
    return this.gatewayService.getHello();
  }
}
