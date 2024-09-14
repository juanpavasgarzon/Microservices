import { Controller, Scope } from '@nestjs/common';

@Controller({ scope: Scope.REQUEST })
export class GatewayController {}
