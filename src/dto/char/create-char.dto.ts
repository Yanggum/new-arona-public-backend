import { PartialType } from '@nestjs/mapped-types';
import { CharDto } from './char.dto';

export class CreateCharDto extends PartialType(CharDto) {}
