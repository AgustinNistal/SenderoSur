import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post(':userId')
  async create(
    @Param('userId') userId: string,
    @Body() dto: CreateReservationDto,
  ) {
    return this.reservationsService.create(userId, dto);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: string) {
    return this.reservationsService.findByUser(userId);
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    return this.reservationsService.cancel(id);
  }
}