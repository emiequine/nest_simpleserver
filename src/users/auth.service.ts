import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  signup(id: string) {
    return this.userService.getUser(id, true);
  }
}
