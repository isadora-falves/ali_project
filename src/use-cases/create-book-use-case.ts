import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';

@Injectable()
export class CreateBookUseCase {
  execute(createBookDto: CreateBookDto) {
    // aqui viria o repository ?

    return `This action returns a #${createBookDto.title} book`;
  }
}
