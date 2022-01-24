import { Stream } from './Stream';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  content?: string;

  @ManyToOne(() => Stream, (stream) => stream.boards)
  stream!: Stream;
}
