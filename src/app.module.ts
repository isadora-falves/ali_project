import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetBookUseCase } from './use-cases/get-book-use-case';
import { BookController } from './controllers/book-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBookUseCase } from './use-cases/create-book-use-case';
import { BooksRepository } from './repository/books-repository';
import { DataSource } from 'typeorm';
import { Book } from './entities/book.entity';
// injeção de dependencia do framework
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // O host do seu servidor MySQL
      port: 3306, // A porta padrão do MySQL
      username: 'root', // Seu nome de usuário do MySQL
      password: '200512', // Sua senha do MySQL
      database: 'ali_project', // O nome do banco de dados que você deseja conectar
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Caminho para as entidades do TypeORM
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Book]),
  ],

  controllers: [AppController, BookController],
  providers: [AppService, GetBookUseCase, CreateBookUseCase, BooksRepository],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
