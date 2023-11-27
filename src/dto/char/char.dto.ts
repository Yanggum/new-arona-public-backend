import { Expose } from 'class-transformer';

export class CharDto {
  @Expose()
  CHAR_NO: number;

  @Expose()
  CHAR_NAME: string;

  @Expose()
  CHAR_TYPE: string;

  @Expose()
  CHAR_INFO: string;

  @Expose()
  UPD_ID: string;

  @Expose()
  UPD_DT: Date;

  @Expose()
  REG_ID: string;

  @Expose()
  REG_DT: Date;

  @Expose()
  STD_CODE_NAME: string;

  @Expose()
  STD_FULL_NAME: string;

  @Expose()
  STD_INC_ID: number;

  @Expose()
  STD_ID: string;

  @Expose()
  STD_TOKEN: string;

  @Expose()
  STD_ROLE: string;

  @Expose()
  STD_ERROR_MSG: string;

  @Expose()
  STD_STATUS: string;

  @Expose()
  THUMBNAIL: string;

  @Expose()
  TEMPERATURE: number;

  @Expose()
  F_PENALTY: number;

  @Expose()
  P_PENALTY: number;

  @Expose()
  STD_SHORT_NAME: string;
}
