
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Reservations', href: '#reservations', id: 'reservations' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-bold serif cursor-pointer tracking-tight"
          onClick={() => scrollTo('#home')}
        >
          Arun's <span className="text-orange-700 italic">Cafe</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors hover:text-orange-700 ${
                activeSection === link.id ? 'text-orange-700' : 'text-stone-600'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('#reservations')}
            className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-md active:scale-95"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-stone-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-lg font-medium text-stone-800"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('#reservations')}
            className="w-full bg-stone-900 text-white py-3 rounded-full font-medium"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
