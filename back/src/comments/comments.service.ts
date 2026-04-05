import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserComment } from './comments.entity';
import { CreateUserCommentDto } from './comments.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(UserComment)
    private readonly commentsRepo: Repository<UserComment>,
    private readonly usersService: UsersService,
  ) {}

  async create(userId: string, dto: CreateUserCommentDto) {
   const user = await this.usersService.findOne(userId);
if (!user) {
  throw new Error('Usuario no encontrado');
}

const comment = this.commentsRepo.create({ ...dto, user: user! });
return this.commentsRepo.save(comment);

;
  }

  async findByUser(userId: string) {
    return this.commentsRepo.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}