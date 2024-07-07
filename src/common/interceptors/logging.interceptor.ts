import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    console.log('---> Request Interceptor');
    console.log({
      METHOD: context.switchToHttp().getRequest().method,
      END_POINT: context.switchToHttp().getRequest().url,
    });
    console.log('Request Body:', context.switchToHttp().getRequest().body);
    console.log('Request Query:', context.switchToHttp().getRequest().query);
    console.log('Request Params:', context.switchToHttp().getRequest().params);

    console.log('<--- Request Interceptor');
    return next.handle();
  }
}
