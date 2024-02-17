import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(csurf());
  app.enableCors({
    origin: true,
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    methods: 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    preflightContinue: false,
  });
  await app.listen(3000);
}
bootstrap();
