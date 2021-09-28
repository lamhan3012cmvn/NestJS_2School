'use strict';

import { InternalServerErrorException } from '@nestjs/common';

export class Error2SchoolException extends InternalServerErrorException {
  constructor(
    message?: string | Record<string, unknown> | any,
    error?: string,
  ) {
    if (message) {
      super(message, error);
    } else {
      super('ErrorException');
    }
  }
}
