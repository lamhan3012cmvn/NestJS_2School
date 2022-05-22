import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Usr = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return JSON.parse(JSON.stringify(request.user));
  },
);
