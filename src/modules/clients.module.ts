import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../entities/client.entity';
import { GetClientUseCase } from '../use-cases/get-client-use-case';
import { CreateClientUseCase } from '../use-cases/create-client-use-case';
import { ClientsRepository } from '../repository/clients-repository';
import { ClientController } from '../controllers/client-controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [GetClientUseCase, CreateClientUseCase, ClientsRepository],
  controllers: [ClientController],
})
export class ClientsModule {}
