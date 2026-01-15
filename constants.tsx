import { MenuItem, Table } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Artisan Cappuccino",
    description: "Double shot of espresso with silky micro-foam and a dusting of organic cocoa.",
    price: 5.50,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e539?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Avocado Sourdough Toast",
    description: "Smashed Hass avocado, heirloom tomatoes, and poached eggs on house-baked sourdough.",
    price: 14.00,
    category: "Brunch",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Truffle Mushroom Risotto",
    description: "Wild mushrooms, aged parmesan, and a drizzle of premium white truffle oil.",
    price: 18.50,
    category: "Brunch",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Lavender Honey Cheesecake",
    description: "Velvety cheesecake infused with French lavender and topped with raw wildflower honey.",
    price: 9.00,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Cold Brew Nitro",
    description: "Smooth, velvety cold brew charged with nitrogen for a creamy head.",
    price: 6.00,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Lemon Raspberry Tart",
    description: "Zesty lemon curd in a buttery crust, topped with fresh seasonal raspberries.",
    price: 8.50,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop"
  }
];

export const TABLES: Table[] = [
  {
    id: 't1',
    number: 1,
    capacity: 2,
    description: "The Window Alcove — Bathed in soft morning light with elegant floral accents.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 't2',
    number: 4,
    capacity: 4,
    description: "The Garden Booth — Nestled among lush indoor palms and vintage brass decor.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 't3',
    number: 12,
    capacity: 6,
    description: "The Library Table — A grand oak masterpiece surrounded by floor-to-ceiling books.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 't4',
    number: 8,
    capacity: 2,
    description: "The Hearth Corner — Intimate setting by the fireplace with artisanal ceramic details.",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1200&auto=format&fit=crop"
  }
];