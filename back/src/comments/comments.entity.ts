import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../users/users.entity';

@Entity()
export class UserComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  accommodationId: string;

  @Column()
  accommodationName: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'text' })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.comments, {
    onDelete: 'CASCADE',
  })
  user: User;
}