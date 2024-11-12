import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onGetAccess: () => void;
}

export default function Header({ onGetAccess }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Artists', href: '#artists' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'About', href: '#about' },
    { label: 'Venue', href: '#venue' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white font-bold text-2xl">MINY</a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={onGetAccess}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get Access
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white text-2xl hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  onGetAccess();
                }}
              >
                Get Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}