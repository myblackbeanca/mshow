import React from 'react';
import { Ticket } from 'lucide-react';

interface TicketCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  onSelect?: () => void;
}

export default function TicketCard({ title, price, features, isPopular, onSelect }: TicketCardProps) {
  return (
    <div className={`relative rounded-2xl p-6 ${
      isPopular ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white' : 'bg-white'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="flex items-center gap-3 mb-4">
        <Ticket className={isPopular ? 'text-white' : 'text-purple-600'} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isPopular 
            ? 'bg-white text-purple-600 hover:bg-gray-100' 
            : 'bg-purple-600 text-white hover:bg-purple-700'
        }`}
      >
        Get Access
      </button>
    </div>
  );
}