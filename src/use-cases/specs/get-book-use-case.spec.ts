import { Test, TestingModule } from '@nestjs/testing';
import { GetBookUseCase } from '../get-book-use-case';

describe('GetBookUseCase', () => {
  let useCase: GetBookUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetBookUseCase],
    }).compile();

    useCase = module.get<GetBookUseCase>(GetBookUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });
});
