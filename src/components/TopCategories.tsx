import React from 'react';
import { Leaf, Apple, Carrot, Coffee } from 'lucide-react';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: 1,
    name: 'Vegetables',
    icon: 'Carrot',
    description: 'Fresh organic vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Fruits',
    icon: 'Apple',
    description: 'Seasonal fresh fruits',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Grains',
    icon: 'Leaf',
    description: 'Organic whole grains',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Beverages',
    icon: 'Coffee',
    description: 'Natural drinks',
    image: 'https://images.unsplash.com/photo-1544252890-c3e91a708b0b?auto=format&fit=crop&q=80'
  }
];

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'Carrot': return <Carrot />;
    case 'Apple': return <Apple />;
    case 'Leaf': return <Leaf />;
    case 'Coffee': return <Coffee />;
    default: return <Leaf />;
  }
};

const TopCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="text-white mb-2">
                  <IconComponent name={category.icon} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;