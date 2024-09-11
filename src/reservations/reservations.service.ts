// reservations.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReservationsService {
  private reservations = [];

  create(reservation) {
    this.reservations.push(reservation);
    return reservation;
  }

  findAll() {
    return this.reservations;
  }

  findOne(id: string) {
    return this.reservations.find(reservation => reservation.id === Number(id));
  }

  update(id: string, updatedReservation) {
    const reservationIndex = this.reservations.findIndex(res => res.id === Number(id));
    if (reservationIndex >= 0) {
      this.reservations[reservationIndex] = { ...this.reservations[reservationIndex], ...updatedReservation };
      return this.reservations[reservationIndex];
    }
    return null;
  }

  remove(id: string) {
    this.reservations = this.reservations.filter(reservation => reservation.id !== Number(id));
    return { deleted: true };
  }
}
