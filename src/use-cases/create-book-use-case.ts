import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { BooksRepository } from '../repository/books-repository';

import { Book } from 'src/entities/book.entity';

@Injectable()
export class CreateBookUseCase {
  constructor(
    @InjectRepository(BooksRepository)
    private readonly booksRepository: BooksRepository,
  ) {}

  async execute(createBookDto: CreateBookDto): Promise<Book> {
    return this.booksRepository.createBook(createBookDto);
  }
}
