import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accommodation } from './accommodation.entity';
import { CreateAccommodationDto } from './accommodations.dto';
import { seedAccommodations } from './accommodations.seed';
import { Reservation } from '../reservations/reservation.entity';

function toDateOnlyISO(date: Date) {
  return date.toISOString().slice(0, 10);
}

@Injectable()
export class AccommodationsService implements OnModuleInit {
  constructor(
    @InjectRepository(Accommodation)
    private readonly accommodationsRepo: Repository<Accommodation>,
    @InjectRepository(Reservation)
    private readonly reservationsRepo: Repository<Reservation>,
  ) {}

  async onModuleInit() {
    const count = await this.accommodationsRepo.count();
    if (count > 0) return;
    await this.accommodationsRepo.save(seedAccommodations);
  }

  findAll() {
    return this.accommodationsRepo.find();
  }

  findOne(id: string) {
    return this.accommodationsRepo.findOne({ where: { id } });
  }

  async create(dto: CreateAccommodationDto) {
    const entity = this.accommodationsRepo.create(dto);
    return this.accommodationsRepo.save(entity);
  }

  async availability(accommodationId: string, fromISO: string, toISO: string) {
    const conflicts = await this.reservationsRepo
      .createQueryBuilder('r')
      .select(['r.id', 'r.checkIn', 'r.checkOut', 'r.status'])
      .where('r.accommodationId = :accommodationId', { accommodationId })
      .andWhere('r.status != :cancelled', { cancelled: 'cancelled' })
      .andWhere('r.checkIn < :to', { to: toISO })
      .andWhere('r.checkOut > :from', { from: fromISO })
      .orderBy('r.checkIn', 'ASC')
      .getMany();

    return {
      accommodationId,
      from: fromISO,
      to: toISO,
      available: conflicts.length === 0,
      conflicts: conflicts.map((c) => ({
        id: c.id,
        checkIn: toDateOnlyISO(new Date(c.checkIn)),
        checkOut: toDateOnlyISO(new Date(c.checkOut)),
        status: c.status,
      })),
    };
  }
}

