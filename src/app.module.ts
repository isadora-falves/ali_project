import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { UsersModule } from './modules/users.module';
import { ClientsModule } from './modules/clients.module';

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
    UsersModule,
    ClientsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
