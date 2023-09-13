// clients.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Client } from '../entities/client.entity';
import { CreateClientDto } from 'src/dto/create-client.dto';

@EntityRepository(Client)
export class ClientsRepository extends Repository<Client> {
  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = new Client();
    client.name = createClientDto.name;
    client.email = createClientDto.email;
    client.years = createClientDto.years;
    console.log(client);

    client.save();
    return client;
  }

  async teste(): Promise<any> {
    return 1;
  }
}
