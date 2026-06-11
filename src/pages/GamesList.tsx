import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';

export default function GamesList() {
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for initial UI
  const mockGames = [
    { id: 1, sport: 'Football', title: '5v5 Turf War', time: '18:00 PM Today', slots: '3 slots left', location: 'Green Arena Turf', price: '₹250/slot' },
    { id: 2, sport: 'Basketball', title: 'Casual Pick-up', time: '19:30 PM Today', slots: '1 slot left', location: 'Downtown Courts', price: '₹150/slot' },
    { id: 3, sport: 'Cricket', title: 'Box Cricket League', time: '21:00 PM Today', slots: 'Full', location: 'Skyhigh Roots', price: '₹300/slot' },
  ];

  useEffect(() => {
    // Simulating standard 1.2s network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-[fadeIn_0.2s_ease-in-out]">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 gap-4">
        <div>
          <h1 className="text-4xl font-heading font-extrabold text-primary-green mb-2">Available Games</h1>
          <p className="text-deep-black/60 font-body">Browse and join open games around you.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border-2 border-black/10 rounded-lg px-4 py-2 font-body text-sm outline-none focus:border-primary-green">
            <option>All Sports</option>
            <option>Football</option>
            <option>Basketball</option>
          </select>
          <select className="bg-white border-2 border-black/10 rounded-lg px-4 py-2 font-body text-sm outline-none focus:border-primary-green">
            <option>Today</option>
            <option>Tomorrow</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGames.map(game => (
          <Link to={`/games/${game.id}`} key={game.id} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border-2 border-transparent hover:border-primary-green/20 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-energy-gold/10 text-energy-gold px-3 py-1 rounded-full text-xs font-bold font-heading">{game.sport}</span>
                <span className={`font-mono text-sm font-semibold ${game.slots === 'Full' ? 'text-red-500' : 'text-primary-green'}`}>{game.slots}</span>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary-green transition-colors">{game.title}</h2>
              <div className="text-deep-black/70 font-body space-y-2 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <span className="opacity-50">🕒</span> {game.time}
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">📍</span> {game.location}
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
               <div className="font-heading font-extrabold text-lg text-deep-black">{game.price}</div>
               <div className={`px-4 py-2 rounded-lg font-heading font-bold text-sm ${game.slots === 'Full' ? 'bg-black/5 text-black/40' : 'bg-primary-green text-white group-hover:bg-energy-gold transition-colors'}`}>
                 {game.slots === 'Full' ? 'Watch' : 'Join Game'}
               </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
