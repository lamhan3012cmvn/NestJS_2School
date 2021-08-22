'use strict';

import { BadRequestException } from '@nestjs/common';

export class FileNotImageException extends BadRequestException {
  constructor(
    message?: string | Record<string, unknown> | any,
    error?: string,
  ) {
    if (message) {
      super(message, error);
    } else {
      super('error.file.not_image');
    }
  }
}
