import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { GetClientUseCase } from '../use-cases/get-client-use-case';
import { CreateClientDto } from '../dto/create-client.dto';
import { CreateClientUseCase } from '../use-cases/create-client-use-case';
import { Client } from 'src/entities/client.entity';
import { ApiOperation } from '@nestjs/swagger';
@Controller('client')
export class ClientController {
  constructor(
    private readonly getClientUseCase: GetClientUseCase,
    private readonly createClientUseCase: CreateClientUseCase,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getClientUseCase.execute(+id);
  }

  // poderiamos criar um dto para o output?
  @Post()
  @ApiOperation({ summary: 'Create Client' })
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.createClientUseCase.execute(createClientDto);
  }
}
