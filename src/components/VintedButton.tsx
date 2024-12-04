import React from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';

export default function VintedButton() {
  return (
    <a
      href="https://www.vinted.fr/member/138813205"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-[#306230] hover:bg-[#0f380f] text-[#9ca04c] py-3 px-6 rounded-lg text-center font-bold transition-colors duration-200 flex items-center justify-center gap-2"
    >
      <ShoppingBag size={20} />
      Visit My Vinted Shop
      <ExternalLink size={16} />
    </a>
  );
}