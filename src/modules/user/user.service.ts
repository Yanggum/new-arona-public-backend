import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../generated/client';
import { PatreonService } from '../patreon/patreon.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaClient,
    private readonly patreonService: PatreonService,
  ) {}
  async updateByDiscordId(id: string, data) {
    const temp = await this.prisma.cc_user.findFirst({
      where: {
        USER_DISCORD_ID: id,
      },
    });
    return this.prisma.cc_user.update({
      where: {
        USER_NO: temp.USER_NO,
      },
      data: {
        ...data,
      },
    });
  }
  async findByDiscordId(id: string) {
    return this.prisma.cc_user.findFirst({
      where: {
        USER_DISCORD_ID: id,
      },
    });
  }

  async createByDiscordId(id: string, data) {
    return this.prisma.cc_user.create({
      data: {
        ...data,
        USER_DISCORD_ID: id,
      },
    });
  }

  async incrementUsageByDiscordId(id: string) {
    const temp = await this.prisma.cc_user.findFirst({
      where: {
        USER_DISCORD_ID: id,
      },
    });
    return this.prisma.cc_user.update({
      where: {
        USER_NO: temp.USER_NO,
      },
      data: {
        TODAY_USER_USAGE: {
          increment: 1,
        },
      },
    });
  }

  async isPremiumUser(discordId: string) {
    const result = await this.patreonService.getPatronStatus(discordId);
    return result !== 'none';
  }
}
