import { Expose } from 'class-transformer';

export class CharChatDto {
  @Expose()
  CHAT_NO: number;

  @Expose()
  CHAR_NO: number;

  @Expose()
  CHAT_ROOM_NO: number;

  @Expose()
  IS_LEARN: string;

  @Expose()
  REG_DT: Date;

  @Expose()
  UPD_ID: string;

  @Expose()
  UPD_DT: Date;

  @Expose()
  CHAT_CONT: string;

  @Expose()
  REG_ID: string;
}
