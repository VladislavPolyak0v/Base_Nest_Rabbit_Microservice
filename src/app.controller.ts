import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  EventPattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('APP_SERVICE') private client: ClientProxy) {}

  @EventPattern()
  getNotifications(@Payload() data: string, @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}`);
    console.log(context.getMessage());
    console.log(`Data: ${data}`);
  }
}
