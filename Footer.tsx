
import React from 'react';

const CAFE_MAP_URL = "https://maps.app.goo.gl/X56qNBk1hwoZWUv19";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand */}
        <div>
          <div className="text-2xl font-bold serif mb-6 tracking-tight">
            Arun's <span className="text-orange-700 italic">Cafe</span>
          </div>
          <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
            Established in 2024. A place where coffee heritage meets modern artisan craft. Join us for your morning ritual.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Twitter', 'Facebook'].map(social => (
              <a 
                key={social}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                title={social}
              >
                <div className="w-1 h-1 bg-stone-500 rounded-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">Quick Menu</h4>
          <ul className="space-y-4 text-sm font-light text-stone-300">
            <li><a href="#menu" className="hover:text-white transition-colors">Our Beverages</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Brunch Specials</a></li>
            <li><a href="#reservations" className="hover:text-white transition-colors">Group Bookings</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Private Events</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">Connect</h4>
          <p className="text-sm font-light text-stone-300 mb-4 leading-relaxed">
            Arun's Artisan Cafe <br />
            Visit us at our flagship location.
          </p>
          <a 
            href={CAFE_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 text-sm hover:underline block mb-4"
          >
            Open in Google Maps
          </a>
          <p className="text-sm font-light text-stone-300">
            hello@arunscafe.com <br />
            +44 (0) 20 7946 0958
          </p>
        </div>

        {/* Feedback */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-6">Your Feedback</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <textarea 
              placeholder="Tell us about your experience..."
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white focus:ring-0 focus:border-white/30 transition-all min-h-[100px]"
            />
            <button className="bg-white text-stone-900 px-6 py-2 rounded-lg text-sm font-bold hover:bg-stone-200 transition-all active:scale-95">
              Send Feedback
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-600 uppercase tracking-widest">
        <div>© 2024 Arun's Cafe. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-stone-400">Privacy Policy</a>
          <a href="#" className="hover:text-stone-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
