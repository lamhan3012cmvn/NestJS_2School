import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const HostName = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: any = ctx.switchToHttp().getRequest();
    return request.headers.host;
  },
);
