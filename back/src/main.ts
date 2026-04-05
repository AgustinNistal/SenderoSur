import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.enableCors({
    origin: [
      'http://localhost:3000', // si tu frontend corre en este puerto
      'http://localhost:3001', // 👈 puerto real de tu frontend
      'http://localhost:3002',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  });


  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
