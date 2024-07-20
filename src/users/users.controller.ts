import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Controller('users')
export class UsersController {
  constructor(private readonly authService: AuthService) {}
  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.authService.signup(id);
  }
}
