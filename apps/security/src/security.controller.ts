import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SecurityController {
  @MessagePattern({ cmd: 'hello-message' })
  getHelloMessage(@Payload() message: { id: string }): string {
    return `Hello ${message.id}!`;
  }

  @EventPattern('hello-event')
  processHelloEvent(@Payload() message: { id: string }) {
    console.log(`Hello ${message.id}!`);
  }
}
