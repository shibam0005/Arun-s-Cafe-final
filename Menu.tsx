
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Coffee' | 'Brunch' | 'Desserts'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Seasonal Menu</h2>
        <p className="text-stone-500 max-w-xl mx-auto font-light">
          We source the finest ingredients from local farms to bring you flavors that celebrate the season.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', 'Coffee', 'Brunch', 'Desserts'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-stone-900 text-white shadow-lg' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-100"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-stone-800 shadow-sm">
                {item.category}
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold serif text-stone-800">{item.name}</h3>
                <span className="text-lg font-medium text-orange-700">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-stone-500 text-sm font-light leading-relaxed mb-6">
                {item.description}
              </p>
              <button className="w-full border border-stone-200 py-3 rounded-xl text-sm font-medium hover:bg-stone-900 hover:text-white transition-all active:scale-95">
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
