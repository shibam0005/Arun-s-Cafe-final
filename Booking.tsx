import React, { useState } from 'react';
import { db } from '../services/database';
import { TABLES } from '../constants';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '',
    tableId: TABLES[0].id
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const selectedTable = TABLES.find(t => t.id === formData.tableId) || TABLES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.guests > selectedTable.capacity) {
      setStatus('error');
      setMessage(`Selected table only accommodates up to ${selectedTable.capacity} guests.`);
      return;
    }

    setStatus('loading');

    // Simulate async network request
    setTimeout(() => {
      const fullTime = `${formData.date}T${formData.time}`;
      const isAvailable = db.isTableAvailable(formData.tableId, fullTime);

      if (!isAvailable) {
        setStatus('error');
        setMessage('This specific table is already booked for your selected time. Please try another table or time.');
        return;
      }

      // Save to mock DB
      const userId = Math.random().toString(36).substring(7);
      db.saveUser({ 
        id: userId, 
        name: formData.name, 
        email: formData.email, 
        phone: formData.phone 
      });

      db.saveReservation({
        id: Math.random().toString(36).substring(7),
        userId,
        tableId: formData.tableId,
        tableNo: selectedTable.number,
        bookingTime: fullTime,
        guestCount: formData.guests,
        status: 'confirmed'
      });

      setStatus('success');
      setMessage(`Table ${selectedTable.number} confirmed for ${formData.guests} guests on ${formData.date} at ${formData.time}!`);
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', guests: 2, date: '', time: '', tableId: TABLES[0].id });
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Reserve Your <span className="italic serif">Sanctuary</span></h2>
        <p className="text-stone-500 max-w-xl mx-auto font-light">
          Each corner of Arun's is unique. Select the atmosphere that suits your moment.
        </p>
      </div>

      {status === 'success' ? (
        <div className="bg-white rounded-[3rem] shadow-2xl p-20 text-center border border-stone-100 animate-fade-in-up">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-3xl font-bold mb-4 serif">Booking Confirmed</h4>
          <p className="text-stone-500 text-lg mb-10 max-w-md mx-auto">{message}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-stone-900 text-white px-12 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl active:scale-95"
          >
            New Reservation
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {/* Visual Table Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TABLES.map((table) => (
              <button
                key={table.id}
                type="button"
                onClick={() => setFormData({...formData, tableId: table.id, guests: Math.min(formData.guests, table.capacity)})}
                className={`relative group rounded-[2.5rem] overflow-hidden text-left transition-all duration-500 border-4 ${
                  formData.tableId === table.id 
                    ? 'border-orange-700 shadow-2xl scale-[1.03] z-10' 
                    : 'border-transparent shadow-sm opacity-60 hover:opacity-100'
                }`}
              >
                <div className="h-44 overflow-hidden">
                  <img 
                    src={table.image} 
                    alt={`Table ${table.number}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-700">Table {table.number}</span>
                    <span className="text-[9px] font-bold bg-stone-100 px-2 py-1 rounded text-stone-500">CAPACITY: {table.capacity}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 italic">
                    "{table.description}"
                  </p>
                </div>
                {formData.tableId === table.id && (
                  <div className="absolute top-4 left-4 bg-orange-700 text-white p-2 rounded-full shadow-lg">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-[4rem] shadow-2xl border border-stone-100 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
            <div className="lg:w-2/5 bg-stone-900 p-12 text-white relative flex flex-col justify-center">
              <div className="relative z-10">
                <span className="text-orange-700 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Current Choice</span>
                <h3 className="text-4xl font-bold serif mb-6">Table No. {selectedTable.number}</h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed mb-10 italic">
                  "{selectedTable.description}"
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                       <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeWidth="1.5"/></svg>
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Fits {selectedTable.capacity} guests</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                       <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5"/></svg>
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Flexible 2h Stay</span>
                   </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-700/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            </div>

            <div className="lg:w-3/5 p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Julian Vesta"
                      className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-100 focus:bg-white focus:border-stone-900 focus:ring-0 transition-all text-sm font-medium"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Guests</label>
                    <select 
                      className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-100 focus:bg-white focus:border-stone-900 focus:ring-0 transition-all text-sm font-medium"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
                    >
                      {[1,2,3,4,5,6].map(n => (
                        <option key={n} value={n} disabled={n > selectedTable.capacity}>
                          {n} {n === 1 ? 'Guest' : 'Guests'} {n > selectedTable.capacity ? '(Exceeds Capacity)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Preferred Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-100 focus:bg-white focus:border-stone-900 focus:ring-0 transition-all text-sm font-medium"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Preferred Time</label>
                    <input 
                      required
                      type="time" 
                      className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-100 focus:bg-white focus:border-stone-900 focus:ring-0 transition-all text-sm font-medium"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Contact Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="julian@artisan.co"
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-100 focus:bg-white focus:border-stone-900 focus:ring-0 transition-all text-sm font-medium"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold border border-red-100 flex items-center gap-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    {message}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-stone-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-stone-800 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : 'Secure My Table'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;