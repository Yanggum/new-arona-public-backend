import { PartialType } from '@nestjs/mapped-types';
import { CharDto } from './char.dto';

export class UpdateCharDto extends PartialType(CharDto) {}
