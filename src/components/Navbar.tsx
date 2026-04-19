import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function Navbar() {
  const { isAuthenticated, openAuthModal, logout } = useAppStore();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-brand-forest/90 backdrop-blur-md text-white px-6 py-4 sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105 group">
          <img src="/logo.png" alt="KhelClan" className="w-10 h-10 object-contain" />
          <div className="text-2xl font-heading font-black tracking-tighter text-white group-hover:text-brand-accent transition-colors">
            KHEL<span className="text-brand-accent group-hover:text-white">CLAN</span>
          </div>
        </Link>
        <div className="space-x-8 flex items-center font-heading font-black uppercase tracking-widest text-[10px]">
          <Link to="/games" className="hover:text-brand-lime transition-all hidden md:block">Browse Games</Link>
          <Link to="/about" className="hover:text-brand-lime transition-all hidden md:block">The Clan</Link>
          <Link to="/contact" className="hover:text-brand-lime transition-all hidden md:block">Support</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="bg-brand-lime text-brand-forest px-4 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(200,249,2,0.3)] transition-all">Dashboard</Link>
              <button onClick={() => { logout(); navigate('/'); }} className="text-white/40 hover:text-white transition-opacity hidden sm:block">Logout</button>
            </div>
          ) : (
            <button onClick={openAuthModal} className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-xl transition-all border border-white/10">LOGIN / JOIN</button>
          )}
        </div>
      </div>
    </nav>
  );
}
