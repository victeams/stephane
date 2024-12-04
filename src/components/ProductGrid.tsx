import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {products.map((product) => (
        <div key={product.id} className="bg-[#9cbc0a] p-3 rounded-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h3 className="font-bold text-[#0f380f]">{product.name}</h3>
          <p className="text-[#306230]">{product.price}</p>
        </div>
      ))}
    </div>
  );
}