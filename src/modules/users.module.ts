import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { SingInUseCase } from '../use-cases/signin-use-case';
import { UsersRepository } from '../repository/users-repository';
import { AuthController } from '../controllers/auth-controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../dto/secret-dto';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [SingInUseCase, UsersRepository],
  controllers: [AuthController],
})
export class UsersModule {}
