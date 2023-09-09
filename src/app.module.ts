import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetBookUseCase } from './use-cases/get-book-use-case';
import { BookController } from './controllers/book-controller';

// injeção de dependencia do framework
@Module({
  controllers: [AppController, BookController],
  providers: [AppService, GetBookUseCase],
})
export class AppModule {}
