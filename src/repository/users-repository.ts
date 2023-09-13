import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { SignInDto } from 'src/dto/sign-in-dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async getUserByName(userDto: SignInDto): Promise<User[] | undefined> {
    const user = await User.find({
      where: {
        usernarme: userDto.username,
      },
    });
    return user;
  }
}
