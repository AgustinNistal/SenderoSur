import { IsString, IsDateString, IsInt, IsNumber, IsEnum, IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  accommodationId: string;

  @IsString()
  accommodationName: string;

  @IsString()
  cityName: string;

  @IsDateString()
  checkIn: Date;

  @IsDateString()
  checkOut: Date;

  @IsInt()
  guests: number;

  @IsNumber()
  totalPrice: number;

  @IsEnum(['pending', 'confirmed', 'cancelled'])
  status: 'pending' | 'confirmed' | 'cancelled';
}

export class UpdateReservationDto {
  @IsOptional()
  @IsString()
  accommodationId?: string;

  @IsOptional()
  @IsString()
  accommodationName?: string;

  @IsOptional()
  @IsString()
  cityName?: string;

  @IsOptional()
  @IsDateString()
  checkIn?: Date;

  @IsOptional()
  @IsDateString()
  checkOut?: Date;

  @IsOptional()
  @IsInt()
  guests?: number;

  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @IsOptional()
  @IsEnum(['pending', 'confirmed', 'cancelled'])
  status?: 'pending' | 'confirmed' | 'cancelled';
}