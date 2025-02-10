import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = (product) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;