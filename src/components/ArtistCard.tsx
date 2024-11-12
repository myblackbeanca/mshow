import React from 'react';
import { Clock, Music, FileText, Headphones } from 'lucide-react';

interface ArtistCardProps {
  name: string;
  type: string;
  image: string;
  time: string;
  description: string;
}

export default function ArtistCard({ name, type, image, time, description }: ArtistCardProps) {
  const handleEPKClick = () => {
    // Handle EPK view logic
    console.log('View EPK for', name);
  };

  const handleMixtapeClick = () => {
    // Handle mixtape listen logic
    console.log('Listen to mixtape for', name);
  };

  return (
    <div className="group">
      <div className="relative mb-4">
        <div className="hexagon-container">
          <div 
            className="hexagon bg-center bg-cover transform transition-transform group-hover:scale-105 duration-300"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {time}
          </span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <div className="flex items-center justify-center gap-2 text-purple-600 mb-2">
          <Music className="w-4 h-4" />
          <span>{type}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleEPKClick}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors text-sm"
          >
            <FileText className="w-4 h-4" />
            View EPK
          </button>
          <button
            onClick={handleMixtapeClick}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors text-sm"
          >
            <Headphones className="w-4 h-4" />
            Listen to Mixtape
          </button>
        </div>
      </div>
    </div>
  );
}