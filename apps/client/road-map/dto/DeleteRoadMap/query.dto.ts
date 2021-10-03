import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

enum statusRoadMap {
  Inactive,
  Active,
}

export class QueryDeleteRoadMap {
  @IsNotEmpty()
  @IsString()
  id: string;
  @IsNotEmpty()
  @IsString()
  // @Min(-1)
  // @Max(2)
  // @IsEnum(statusRoadMap)
  status: string;
}
