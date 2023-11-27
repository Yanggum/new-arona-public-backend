import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PatreonPrice } from './constant/patreon.price';

@Injectable()
export class PatreonService {
  private readonly PATREON_ACCESS_TOKEN = 'PATREON_ACCESS_TOKEN';
  private readonly campaignId = 'campaignId';

  async getPatronStatus(discordId: string): Promise<string> {
    const url = `https://www.patreon.com/api/oauth2/v2/campaigns/${this.campaignId}/members?include=user&fields%5Bmember%5D=patron_status,currently_entitled_amount_cents&fields%5Buser%5D=social_connections`;
    const headers = { Authorization: `Bearer ${this.PATREON_ACCESS_TOKEN}` };

    try {
      const response = await axios.get(url, { headers });
      const members = response.data.data;
      const discordMembers = response.data.included;
      let patreonId = '';

      discordMembers.forEach((member) => {
        if (
          member.attributes.social_connections.discord !== null &&
          discordId === member.attributes.social_connections.discord.user_id
        ) {
          patreonId = member.id;
        }
      });

      if (!patreonId) {
        return 'none';
      } else {
        const member = members.find(
          (member) => member.relationships.user.data.id === patreonId,
        );
        const patronStatus = member.attributes.patron_status;
        const entitledAmount =
          member.attributes.currently_entitled_amount_cents;

        if (patronStatus === 'active_patron') {
          if (entitledAmount >= PatreonPrice.PREMIUM) {
            return 'premium';
          } else if (entitledAmount >= PatreonPrice.PRO) {
            return 'pro';
          } else if (entitledAmount >= PatreonPrice.STANDARD) {
            return 'standard';
          }
        }
      }
    } catch (error) {
      console.error(error);
      return 'none';
    }
  }
}
