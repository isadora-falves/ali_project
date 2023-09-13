import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../dto/create-client.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { ClientsRepository } from '../repository/clients-repository';

import { Client } from 'src/entities/client.entity';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @InjectRepository(ClientsRepository)
    private readonly clientsRepository: ClientsRepository,
  ) {}

  async execute(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientsRepository.createClient(createClientDto);
  }
}
