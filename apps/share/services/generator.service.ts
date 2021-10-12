import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GeneratorService {
  public uuid(): string {
    return uuidv4();
  }
  public fileName(ext: string) {
    return this.uuid() + '.' + ext;
  }
}
