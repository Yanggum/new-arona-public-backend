import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaClient } from '../../../generated/client';
import { PatreonModule } from '../patreon/patreon.module';

@Module({
  imports: [PatreonModule],
  controllers: [UserController],
  providers: [UserService, PrismaClient],
  exports: [UserService],
})
export class UserModule {}
