import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateUserCommentDto } from './comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':userId')
  async create(
    @Param('userId') userId: string,
    @Body() dto: CreateUserCommentDto,
  ) {
    return this.commentsService.create(userId, dto);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: string) {
    return this.commentsService.findByUser(userId);
  }
}