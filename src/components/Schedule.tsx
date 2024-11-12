import React from 'react';
import { Calendar, Clock, Users, MessageCircle } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Calendar className="w-8 h-8 text-purple-600" />
          <h2 className="text-4xl font-bold text-center">Event Schedule</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              time: "7:00 PM - 7:30 PM",
              artist: "Canvas the Band",
              type: "Performance + Q&A",
              description: "Opening act featuring dynamic indie rock"
            },
            {
              time: "7:40 PM - 8:10 PM",
              artist: "Rachel Bard",
              type: "Performance + Q&A",
              description: "Acoustic folk melodies and storytelling"
            },
            {
              time: "8:20 PM - 8:50 PM",
              artist: "DJ Kevin Diamond",
              type: "Performance + Q&A",
              description: "Electronic fusion with live elements"
            },
            {
              time: "9:00 PM - 9:30 PM",
              artist: "Luna Rivers",
              type: "Performance + Q&A",
              description: "Alternative pop with powerful vocals"
            },
            {
              time: "9:40 PM - 10:10 PM",
              artist: "The Midnight Echo",
              type: "Performance + Q&A",
              description: "Genre-defying indie electronic"
            },
            {
              time: "10:30 PM - 11:00 PM",
              artist: "VIP After-Party",
              type: "Exclusive Access",
              description: "Secret location revealed via MINY"
            }
          ].map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 text-purple-600 mb-3">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{event.time}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{event.artist}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Users className="w-4 h-4" />
                <span>{event.type}</span>
              </div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}