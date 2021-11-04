import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRMCFileDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  fileType: string;
}

export interface ICreateRMCFile {
  name: string;
  fileType: string;
  createdBy: string;
  type: number;
  idRoadMap: string;
}
