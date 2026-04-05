import { Column, Entity, PrimaryColumn } from 'typeorm';

export type AccommodationType = 'domo' | 'cabaña' | 'hotel boutique';

@Entity()
export class Accommodation {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cityId: string;

  @Column()
  city: string;

  @Column({ type: 'enum', enum: ['domo', 'cabaña', 'hotel boutique'] })
  type: AccommodationType;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', array: true, default: '{}' })
  amenities: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  pricePerNight: number;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ type: 'int', default: 0 })
  reviewCount: number;

  @Column({ type: 'text', array: true, default: '{}' })
  images: string[];

  @Column({ type: 'int', default: 1 })
  maxGuests: number;
}

