import { CharChatLogDto } from './char-chat-log.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateCharChatLogDto extends PartialType(CharChatLogDto) {}
