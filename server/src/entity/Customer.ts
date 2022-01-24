import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { Stream } from './Stream';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Stream, (stream) => stream.owner)
  ownedStreams?: Stream[];

  @ManyToMany(() => Stream, (stream) => stream.customers)
  @JoinTable()
  invitedStreams?: Stream[];
}
