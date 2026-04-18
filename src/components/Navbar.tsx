import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function Navbar() {
  const { isAuthenticated, user, openAuthModal, logout } = useAppStore();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-deep-black text-muted-green p-4 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-extrabold text-primary-green tracking-tight">Khel<span className="text-white">Clan</span></Link>
        <div className="space-x-4 flex items-center font-body text-sm font-medium">
          <Link to="/games" className="hover:text-energy-gold transition-colors hidden md:block mr-4">Find a Game</Link>
          <Link to="/about" className="hover:text-energy-gold transition-colors hidden md:block mr-4">About Us</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="bg-primary-green text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Dashboard</Link>
              <button onClick={() => { logout(); navigate('/'); }} className="text-white/60 hover:text-white transition hidden sm:block">Logout</button>
            </>
          ) : (
            <button onClick={openAuthModal} className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">Login / Join</button>
          )}
        </div>
      </div>
    </nav>
  );
}
