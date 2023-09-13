import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { SingInUseCase } from '../use-cases/signin-use-case';
import { SignInDto } from '../dto/sign-in-dto';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUseCase: SingInUseCase) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Signin' })
  signIn(@Body() signInDto: SignInDto) {
    return this.authUseCase.execute(signInDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
