import { CharChatPremiumDto } from './char-chat-premium.dto';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCharChatPremiumDto extends PartialType(CharChatPremiumDto) {}
