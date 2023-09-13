import { Injectable } from '@nestjs/common';

@Injectable()
export class GetClientUseCase {
  execute(id: number) {
    return `This action returns a #${id} client`;
  }
}
