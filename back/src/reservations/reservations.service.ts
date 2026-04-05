import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { CreateReservationDto } from './reservation.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationsRepo: Repository<Reservation>,
    private readonly usersService: UsersService,
  ) {}

  async create(userId: string, dto: CreateReservationDto) {
    const user = await this.usersService.findOne(userId);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    if (!dto) {
      throw new BadRequestException('Body requerido');
    }

    const checkInISO = new Date(dto.checkIn).toISOString().slice(0, 10);
    const checkOutISO = new Date(dto.checkOut).toISOString().slice(0, 10);

    const conflicts = await this.reservationsRepo
      .createQueryBuilder('r')
      .where('r.accommodationId = :accommodationId', {
        accommodationId: dto.accommodationId,
      })
      .andWhere('r.status != :cancelled', { cancelled: 'cancelled' })
      .andWhere('r.checkIn < :to', { to: checkOutISO })
      .andWhere('r.checkOut > :from', { from: checkInISO })
      .getCount();

    if (conflicts > 0) {
      throw new BadRequestException('El hospedaje no está disponible en esas fechas');
    }

    const reservation = this.reservationsRepo.create({ ...dto, user });
    return this.reservationsRepo.save(reservation);


  }

  async findByUser(userId: string) {
    return this.reservationsRepo.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }

  async cancel(id: string) {
    const reservation = await this.reservationsRepo.findOne({ where: { id } });
    if (!reservation) {
      throw new NotFoundException('Reserva no encontrada');
    }
    reservation.status = 'cancelled';
    return this.reservationsRepo.save(reservation);
  }
}