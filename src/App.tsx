import React, { useState } from 'react';
import { Music2, Users, Star, Calendar, Info } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import ArtistCard from './components/ArtistCard';
import VenuePreview from './components/VenuePreview';
import AccessForm from './components/AccessForm';
import Schedule from './components/Schedule';
import About from './components/About';
import Subscribe from './components/Subscribe';
import { artists } from './data/artists';

export default function App() {
  const [isAccessFormOpen, setIsAccessFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header onGetAccess={() => setIsAccessFormOpen(true)} />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center text-white px-4 py-20">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        ></div>
        
        <div className="container mx-auto text-center relative z-10 space-y-8 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience the Year-End<br />MINY Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Exclusive Performances, Intimate Q&A, Collectible MINYs, and VIP Access
          </p>
          <CountdownTimer />
          <button 
            onClick={() => setIsAccessFormOpen(true)}
            className="mt-12 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold px-12 py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            <Star className="w-6 h-6" />
            Support Artists & Get Access
          </button>
        </div>
      </header>

      <About />
      
      {/* Artists Section */}
      <section id="artists" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Music2 className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-center">Featured Artists</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
        </div>
      </section>

      <Schedule />
      <VenuePreview />
      <Subscribe />
      <Footer />
      
      <AccessForm 
        isOpen={isAccessFormOpen}
        onClose={() => setIsAccessFormOpen(false)}
      />
    </div>
  );
}