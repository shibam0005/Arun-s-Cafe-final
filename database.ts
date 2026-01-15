
import { User, Reservation, Order } from '../types';

const STORAGE_KEYS = {
  USERS: 'aruns_cafe_users',
  RESERVATIONS: 'aruns_cafe_reservations',
  ORDERS: 'aruns_cafe_orders'
};

export const db = {
  getUsers: (): User[] => JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]'),
  getReservations: (): Reservation[] => JSON.parse(localStorage.getItem(STORAGE_KEYS.RESERVATIONS) || '[]'),
  getOrders: (): Order[] => JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]'),

  saveUser: (user: User) => {
    const users = db.getUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  saveReservation: (reservation: Reservation) => {
    const reservations = db.getReservations();
    reservations.push(reservation);
    localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(reservations));
  },

  saveOrder: (order: Order) => {
    const orders = db.getOrders();
    orders.push(order);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  },

  isTableAvailable: (tableId: string, time: string): boolean => {
    const reservations = db.getReservations();
    const checkTime = new Date(time).getTime();
    const TWO_HOURS = 2 * 60 * 60 * 1000;

    return !reservations.some(r => {
      const resTime = new Date(r.bookingTime).getTime();
      return r.tableId === tableId && Math.abs(resTime - checkTime) < TWO_HOURS;
    });
  }
};