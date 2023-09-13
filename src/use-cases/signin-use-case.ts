import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/repository/users-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInDto } from 'src/dto/sign-in-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SingInUseCase {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}
  async execute(signInDto: SignInDto): Promise<any> {
    const user = await this.usersRepository.getUserByName(signInDto);
    if (user[0]?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user[0].id, username: user[0].usernarme };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token,
    };
  }
}
