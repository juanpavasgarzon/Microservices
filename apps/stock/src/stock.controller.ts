import { Controller, Get } from '@nestjs/common';
import { StockService } from './stock.service';

@Controller()
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get('message')
  getHello() {
    return this.stockService.sendMessage();
  }

  @Get('event')
  processEvent() {
    return this.stockService.sendEvent();
  }
}
