import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

export default function VenuePreview() {
  return (
    <section id="venue" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">The Venue</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-400">
                  A cozy, intimate space located just a 2-minute walk from Times Square, NYC.
                  Address provided to ticket holders only.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Event Hours</h3>
                <p className="text-gray-400">
                  Doors open: 6:30 PM<br />
                  Event starts: 7:00 PM<br />
                  VIP after-party: 10:30 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden ${
                  index === 2 ? 'col-span-2' : ''
                }`}
              >
                <img 
                  src={src} 
                  alt={`Venue preview ${index + 1}`} 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}