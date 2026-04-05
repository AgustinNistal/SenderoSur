import { Reservation } from 'src/reservations/reservation.entity';
import { UserComment } from 'src/comments/comments.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Reservation, reservation => reservation.user, {
    cascade: true,
  })
  reservations: Reservation[];

  @OneToMany(() => UserComment, comment => comment.user, {
    cascade: true,
  })
  comments: UserComment[];
}
