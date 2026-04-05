import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './users.dto';
import { UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto & { password: string }) {
    const user = this.usersRepo.create(dto);
    return this.usersRepo.save(user);
  }

  async findAll() {
  return this.usersRepo.find({ relations: ['reservations', 'comments'] });
}


  async findOne(id: string): Promise<User | null> {
    return this.usersRepo.findOne({ where: { id },
      relations: ['reservations', 'comments'] });
  }

  async findByEmail(email: string) {
    return this.usersRepo
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.usersRepo.update(id, dto);
    return this.findOne(id);
  }
  async remove(id: string) {
  return this.usersRepo.delete(id);
 }
}