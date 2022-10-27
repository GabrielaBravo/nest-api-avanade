import { PartialType } from '@nestjs/mapped-types';
import { CreateLogistiscDto } from './create-logistisc.dto';

export class UpdateLogistiscDto extends PartialType(CreateLogistiscDto) {}
