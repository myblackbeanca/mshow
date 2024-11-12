import React, { useState } from 'react';
import { Star, Music, Video, Lock } from 'lucide-react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log('Subscription submitted:', { email, phone });
  };

  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">MINY Monthly Exclusives</h2>
          <p className="text-xl mb-12">
            Get unlimited access to exclusive content from your favorite MINY artists
            for just $4.99/month
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Video,
                title: 'Behind the Scenes',
                description: 'Exclusive rehearsal footage and artist interviews'
              },
              {
                icon: Music,
                title: 'Unreleased Tracks',
                description: 'Listen to new music before anyone else'
              },
              {
                icon: Lock,
                title: 'VIP Benefits',
                description: 'Priority access to future MINY events'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="tel"
              placeholder="Your phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Star className="w-5 h-5" />
              Subscribe to MINY Exclusives
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}