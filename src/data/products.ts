import { Product } from '@/contexts/CartContext';
import productHeadphones from '@/assets/product-headphones.jpg';
import productWatch from '@/assets/product-watch.jpg';
import productBag from '@/assets/product-bag.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: productHeadphones,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Luxury Smart Watch',
    price: 499.99,
    image: productWatch,
    description: 'Elegant smartwatch with advanced health tracking, GPS, and premium materials. Stay connected in style.',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Premium Leather Laptop Bag',
    price: 189.99,
    image: productBag,
    description: 'Handcrafted leather laptop bag with premium materials and elegant design. Perfect for professionals.',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Wireless Charging Station',
    price: 79.99,
    image: productHeadphones,
    description: 'Fast wireless charging station for multiple devices. Clean, modern design for your desk or nightstand.',
    category: 'Electronics'
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 249.99,
    image: productWatch,
    description: 'Premium designer sunglasses with UV protection and scratch-resistant lenses. Timeless style.',
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    price: 149.99,
    image: productBag,
    description: 'Portable Bluetooth speaker with premium sound quality and waterproof design. Perfect for any adventure.',
    category: 'Electronics'
  }
];