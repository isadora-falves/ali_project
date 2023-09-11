import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('API GSI Documentation')
    .setDescription('Descrição da Sua API')
    .setVersion('1.0')
    .addTag('endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Configure o Swagger UI para estar disponível em /swagger
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
