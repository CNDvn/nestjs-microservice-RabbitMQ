import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  const port = 8000;
  await app.listen(port, () => {
    console.log(`Server running port: ${port}`);
  });
}
bootstrap();
