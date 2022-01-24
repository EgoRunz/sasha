import { Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { Board } from './Board';
import { Customer } from './Customer';

@Entity()
export class Stream {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Customer, (customer) => customer.ownedStreams)
  owner!: Customer;

  @OneToMany(() => Board, (board) => board.stream)
  boards?: Board[];

  @ManyToMany(() => Customer, (customer) => customer.invitedStreams)
  customers?: Customer[];
}
