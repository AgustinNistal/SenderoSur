import { BadRequestException, Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { AccommodationsService } from './accommodations.service';
import { CreateAccommodationDto } from './accommodations.dto';

@Controller('accommodations')
export class AccommodationsController {
  constructor(private readonly accommodationsService: AccommodationsService) {}

  @Get()
  findAll() {
    return this.accommodationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accommodationsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateAccommodationDto) {
    return this.accommodationsService.create(dto);
  }

  @Get(':id/availability')
  availability(
    @Param('id') id: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    if (!from || !to) {
      throw new BadRequestException('Query params "from" y "to" son requeridos (YYYY-MM-DD).');
    }
    return this.accommodationsService.availability(id, from, to);
  }
}

