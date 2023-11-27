import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  USER_NO: number;

  @Expose()
  USER_NAME: string;

  @Expose()
  REG_ID: string;

  @Expose()
  REG_DT: Date;

  @Expose()
  UPD_ID: string;

  @Expose()
  UPD_DT: Date;

  @Expose()
  USER_DISCORD_ID: string;

  @Expose()
  TODAY_USER_USAGE: number;
}
