import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { ResponseInterceptor } from 'src/common/interceptors/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalInterceptors(
    new ResponseInterceptor(),
    new LoggingInterceptor(),
  );

  const config = new DocumentBuilder()
    .setTitle('Snack World Backend API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3333);
}
bootstrap();
