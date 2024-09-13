import { Injectable } from '@nestjs/common';
import { RabbitAccessor } from '@app/shared';

@Injectable()
export class SecurityService {
  constructor(private readonly rabbitAccessor: RabbitAccessor) {}

  getHelloEvent(): string {
    return 'Hello World!';
  }
}
