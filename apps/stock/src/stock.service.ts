import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StockService {
  constructor(@Inject('SECURITY') private readonly security: ClientProxy) {}

  async sendMessage() {
    const message = this.security.send<string>(
      { cmd: 'hello-message' },
      { id: 'stock' },
    );
    return await firstValueFrom(message).catch((err) => console.error(err));
  }

  async sendEvent() {
    this.security.emit<string>('hello-event', { id: 'stock' });
    return 'Event sent';
  }
}
