import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { GetBookUseCase } from '../use-cases/get-book-use-case';
import { CreateBookDto } from '../dto/create-book.dto';
import { CreateBookUseCase } from '../use-cases/create-book-use-case';
@Controller('book')
export class BookController {
  constructor(
    private readonly getBookUseCase: GetBookUseCase,
    private readonly createBookUseCase: CreateBookUseCase,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getBookUseCase.execute(+id);
  }

  // poderiamos criar um dto para o output?
  @Post()
  create(@Body() createBookDto: CreateBookDto): string {
    return this.createBookUseCase.execute(createBookDto);
  }
}
