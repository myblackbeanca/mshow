import React from 'react';
import { Info, Disc, Star, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Info className="w-8 h-8 text-purple-600" />
          <h2 className="text-4xl font-bold text-center">About the Event</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Join us on December 5 for an unforgettable night of live indie music in NYC. 
              Enjoy 15-20 minute sets by five unique artists, with Q&A sessions and a private meet & greet. 
              For VIPs, an after-hours party awaits at a secret location accessible only through the 
              collectible MINY you'll receive at the event.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl">
                <Users className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-semibold mb-1">Limited Capacity</h3>
                <p className="text-gray-600">Only 60 seats available</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl">
                <Star className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-semibold mb-1">VIP Access</h3>
                <p className="text-gray-600">Exclusive after-party</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Disc className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold">What's a MINY?</h3>
            </div>
            <p className="text-gray-700 mb-6">
              A MINY is a 2" digital vinyl record collectible that connects you directly with your 
              favorite artists. It's your gateway to exclusive content, backstage moments, and 
              unforgettable experiences. Each attendee receives a MINY to make the night truly memorable.
            </p>
            <ul className="space-y-3">
              {[
                "Access exclusive artist content",
                "Unlock backstage experiences",
                "Connect directly with artists",
                "Collect and trade digital vinyl"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-purple-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}