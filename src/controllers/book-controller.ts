import { Controller, Get, Param } from '@nestjs/common';
import { GetBookUseCase } from '../use-cases/get-book-use-case';

@Controller('book')
export class BookController {
  constructor(private readonly getBookUseCase: GetBookUseCase) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getBookUseCase.execute(+id);
  }
}
