import React from 'react';

const CAFE_MAP_URL = "https://maps.app.goo.gl/X56qNBk1hwoZWUv19";

const Location: React.FC = () => {
  const staticData = {
    text: "Arun's Cafe is situated in the heart of the city's most vibrant artisan district. A place where the smell of roasting beans meets architectural beauty and community spirit. Our flagship location is a sanctuary for coffee enthusiasts and food lovers alike, offering a meticulously curated atmosphere designed for moments of reflection and connection.",
    grounding: [
      { title: "Artisan Square", uri: "https://maps.google.com" },
      { title: "The Old Library", uri: "https://maps.google.com" },
      { title: "Contemporary Art Center", uri: "https://maps.google.com" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-orange-700 font-bold tracking-widest text-xs uppercase mb-4 block">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">A Sanctuary for <span className="italic serif">Coffee Lovers</span>.</h2>
          
          <div className="prose prose-stone">
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-10">
              {staticData.text}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-4">Our Flagship</h4>
                <a 
                  href={CAFE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col gap-2"
                >
                  <span className="text-stone-900 font-bold group-hover:text-orange-700 transition-colors">123 Artisan Way, London</span>
                  <span className="text-stone-400 text-xs flex items-center gap-1 group-hover:underline">
                    View on Google Maps
                  </span>
                </a>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-4">Nearby Landmarks</h4>
                <div className="flex flex-col gap-3">
                  {staticData.grounding.map((item, i) => (
                    <a 
                      key={i}
                      href={item.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-500 hover:text-orange-700 transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-stone-300 group-hover:bg-orange-700 rounded-full transition-colors" />
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Map Interface */}
        <div className="relative h-[600px] bg-stone-200 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-40 mix-blend-multiply transition-transform duration-[20s] group-hover:scale-110"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-stone-900/10" />
          
          <div className="absolute inset-0 p-10 flex flex-col justify-between">
            <div className="w-full bg-white/80 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-xl border border-white/40 flex items-center justify-between max-w-sm mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-stone-800 uppercase tracking-widest">Live: Artisan Corner</span>
              </div>
              <span className="text-[10px] font-bold text-stone-400">4.9 ★★★★★</span>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-[2.5rem] shadow-2xl mb-4 border border-white flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white text-xl">☕</div>
                <div>
                  <div className="text-sm font-black text-stone-900">Arun's Cafe</div>
                  <div className="text-[10px] text-orange-700 font-bold uppercase">Now Brewing</div>
                </div>
              </div>
              <div className="w-6 h-6 bg-stone-900 rounded-full border-4 border-white shadow-xl animate-bounce" />
            </div>

            <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl border border-white/50 max-w-sm mx-auto w-full transition-all">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-bold serif">Arun's Artisan</h4>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black">OPEN NOW</div>
              </div>
              <p className="text-stone-500 text-sm mb-8 font-light leading-relaxed">
                Our flagship store features a rotating selection of micro-lot coffees and seasonal pastries.
              </p>
              <a 
                href={CAFE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-stone-900 text-white py-4 rounded-2xl text-center text-sm font-bold shadow-xl hover:bg-stone-800 transition-all active:scale-95"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;