import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from '../user/user.module';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { PrismaClient } from '../../../generated/client';
import { PatreonModule } from '../patreon/patreon.module';

@Module({
  imports: [ScheduleModule.forRoot(), UserModule, PatreonModule],
  controllers: [ChatController],
  providers: [ChatService, PrismaClient],
})
export class ChatModule {}
