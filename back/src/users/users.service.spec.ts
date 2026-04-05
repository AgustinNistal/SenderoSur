import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find(u => u.id === id);
  }

  create(dto: CreateUserDto) {
    const user = { id: Date.now().toString(), ...dto };
    this.users.push(user);
    return user;
  }

  update(id: string, dto: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) return null;
    Object.assign(user, dto);
    return user;
  }

  remove(id: string) {
    this.users = this.users.filter(u => u.id !== id);
    return { deleted: true };
  }
}