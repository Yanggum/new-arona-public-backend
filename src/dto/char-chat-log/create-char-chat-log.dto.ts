import { CharChatLogDto } from './char-chat-log.dto';
import { PartialType } from '@nestjs/mapped-types';
export class CreateCharChatLogDto extends PartialType(CharChatLogDto) {}
