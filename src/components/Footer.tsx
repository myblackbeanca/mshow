import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MINY</h3>
            <p className="text-gray-400">Connecting fans with indie artists through unique digital collectibles.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#artists" className="text-gray-400 hover:text-purple-400">Artists</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-purple-400">Schedule</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">About</a></li>
              <li><a href="#venue" className="text-gray-400 hover:text-purple-400">Venue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2024 MINY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}