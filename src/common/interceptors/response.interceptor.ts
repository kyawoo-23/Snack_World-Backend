import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  isSuccess?: boolean;
  message?: string;
  data?: T | null;
  error?: string | null;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((result) => {
        const {
          isSuccess = true,
          message = '',
          data = null,
          error = null,
        } = result;

        console.log('\nResponse Interceptor:', {
          isSuccess,
          message,
          data,
          error,
        });

        return {
          isSuccess,
          message,
          data,
          error,
        };
      }),
    );
  }
}
