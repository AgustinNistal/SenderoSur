import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateUserCommentDto {
  @IsString()
  accommodationId: string;

  @IsString()
  accommodationName: string;

  @IsInt()
  rating: number;

  @IsString()
  text: string;
}

export class UpdateUserCommentDto {
  @IsOptional()
  @IsString()
  accommodationId?: string;

  @IsOptional()
  @IsString()
  accommodationName?: string;

  @IsOptional()
  @IsInt()
  rating?: number;

  @IsOptional()
  @IsString()
  text?: string;
}