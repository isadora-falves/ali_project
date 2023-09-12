// books.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookDto } from 'src/dto/create-book.dto';

@EntityRepository(Book)
export class BooksRepository extends Repository<Book> {
  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();
    book.title = createBookDto.title;
    book.author = createBookDto.author;
    book.publicationYear = createBookDto.publicationYear;
    console.log(book);

    book.save();
    return book;
  }
}
