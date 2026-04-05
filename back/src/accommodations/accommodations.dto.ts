import { IsArray, IsEnum, IsInt, IsNumber, IsString, Min } from 'class-validator';
import type { AccommodationType } from './accommodation.entity';

export class CreateAccommodationDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  cityId: string;

  @IsString()
  city: string;

  @IsEnum(['domo', 'cabaña', 'hotel boutique'])
  type: AccommodationType;

  @IsString()
  description: string;

  @IsArray()
  amenities: string[];

  @IsNumber()
  @Min(0)
  pricePerNight: number;

  @IsNumber()
  @Min(0)
  rating: number;

  @IsInt()
  @Min(0)
  reviewCount: number;

  @IsArray()
  images: string[];

  @IsInt()
  @Min(1)
  maxGuests: number;
}

