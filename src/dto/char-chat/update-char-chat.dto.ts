import { CharChatDto } from './char-chat.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateCharChatDto extends PartialType(CharChatDto) {}
