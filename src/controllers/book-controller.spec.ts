import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book-controller';
import { GetBookUseCase } from '../use-cases/get-book-use-case';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [GetBookUseCase],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
