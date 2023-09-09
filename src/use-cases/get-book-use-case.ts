import { Injectable } from '@nestjs/common';

@Injectable()
export class GetBookUseCase {
  execute(id: number) {
    return `This action returns a #${id} book`;
  }
}
