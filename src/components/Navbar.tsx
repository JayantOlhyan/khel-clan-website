import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-deep-black text-muted-green p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-extrabold text-primary-green tracking-tight">Khel<span className="text-white">Clan</span></Link>
        <div className="space-x-6 font-body text-sm font-medium hidden md:block">
          <Link to="/games" className="hover:text-energy-gold transition-colors">Find a Game</Link>
          <Link to="/about" className="hover:text-energy-gold transition-colors">About Us</Link>
          <Link to="/dashboard" className="hover:text-energy-gold transition-colors bg-white/10 px-4 py-2 rounded-lg">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
