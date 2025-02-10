import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Organic Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80",
    category: "Fruits",
    rating: 4
  },
  {
    id: 2,
    name: "Fresh Spinach",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80",
    category: "Vegetables",
    rating: 5
  },
  {
    id: 3,
    name: "Organic Quinoa",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
    category: "Grains",
    rating: 4
  },
  {
    id: 4,
    name: "Fresh Avocados",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80",
    category: "Fruits",
    rating: 5
  }
];

const ProductGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;