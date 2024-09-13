import { Module } from '@nestjs/common';
import { SecurityController } from './security.controller';
import { SecurityService } from './security.service';
import { RabbitModule } from '@app/shared';
import { DatabaseModule } from '@app/shared/modules/database.module';

@Module({
  imports: [RabbitModule, DatabaseModule.registerSchemas([])],
  controllers: [SecurityController],
  providers: [SecurityService],
})
export class SecurityModule {}
