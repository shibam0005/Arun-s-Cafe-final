
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  description: string;
  image: string;
}

export interface Reservation {
  id: string;
  userId: string;
  tableId: string;
  tableNo: number;
  bookingTime: string;
  guestCount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Order {
  id: string;
  userId: string;
  itemsOrdered: string[];
  totalPrice: number;
  orderStatus: 'preparing' | 'ready' | 'delivered';
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Brunch' | 'Desserts';
  image: string;
}