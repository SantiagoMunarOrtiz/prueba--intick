import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsModule } from './reservations/reservations.module'; // Importa el módulo de reservas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password', 
      database: 'reservation_system',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReservationsModule, 
  ],
})
export class AppModule {}
