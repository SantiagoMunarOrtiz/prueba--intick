import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Decorador que indica que esta clase es una entidad de la base de datos MYSQL
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  customerName: string;

  @Column()
  serviceType: string;

  @Column()
  reservationDate: Date;

  @Column()
  status: string;
}
