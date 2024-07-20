import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(id: string, signup: boolean) {
    const user: any = {
      id,
      username: 'emi',
      timeStamp: new Date().toISOString(),
    };

    if (signup) {
      user.signedIn = true;
    }

    return user;
  }
}
