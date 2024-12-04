import React from 'react';
import { products } from '../data/products';
import ProductGrid from './ProductGrid';
import VideoPresentation from './VideoPresentation';
import VintedButton from './VintedButton';

export default function GameBoy() {
  return (
    <div className="min-h-screen bg-[#8ba4b0] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Game Boy Frame */}
        <div className="bg-[#8b8b8b] rounded-[2rem] p-6 shadow-xl">
          {/* Screen Area */}
          <div className="bg-[#9ca04c] p-8 rounded-lg mb-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2 text-[#0f380f]">My Retro Shop</h1>
              <p className="text-[#306230]">Discover Vintage Treasures</p>
            </div>
            
            <VideoPresentation />
            <ProductGrid products={products} />
            <VintedButton />
          </div>

          {/* Game Boy Controls */}
          <div className="flex justify-between items-center px-4">
            <div className="w-24 h-24 bg-[#000000] rounded-full"></div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <button className="w-12 h-12 bg-[#574f4d] rounded-lg"></button>
                <button className="w-12 h-12 bg-[#574f4d] rounded-lg"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}