
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'reservations', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="menu" className="py-24 bg-white">
          <Menu />
        </section>

        <section id="reservations" className="py-24 bg-stone-50">
          <Booking />
        </section>

        <section id="contact" className="py-24 bg-white border-t border-stone-200">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
