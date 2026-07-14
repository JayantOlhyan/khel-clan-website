import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is used, if not we can use SVG

export default function Navbar() {
  const { isAuthenticated, openAuthModal, logout } = useAppStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-brand-forest/90 backdrop-blur-md text-white px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 group z-50">
          <img src="/logo.png" alt="KhelClan" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain bg-white p-1 shadow-sm" />
          <div className="text-xl sm:text-2xl font-heading font-black tracking-tighter text-white group-hover:text-brand-accent transition-colors">
            KHEL<span className="text-brand-accent group-hover:text-white">CLAN</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-heading font-black uppercase tracking-widest text-[10px] lg:text-xs">
          <Link to="/games" className="hover:text-brand-lime hover:scale-110 active:scale-95 transition-all duration-300 ease-out transform origin-center">Browse Games</Link>
          <Link to="/about" className="hover:text-brand-lime hover:scale-110 active:scale-95 transition-all duration-300 ease-out transform origin-center">The Clan</Link>
          <Link to="/contact" className="hover:text-brand-lime hover:scale-110 active:scale-95 transition-all duration-300 ease-out transform origin-center">Support</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link to="/dashboard" className="bg-brand-lime text-brand-forest px-4 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(200,249,2,0.3)] transition-all">Dashboard</Link>
              <button onClick={() => { logout(); navigate('/'); }} className="text-white/40 hover:text-white transition-opacity">Logout</button>
            </div>
          ) : (
            <button onClick={openAuthModal} className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-xl transition-all border border-white/10 min-h-[48px]">LOGIN / JOIN</button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden z-50 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-white" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`fixed inset-0 bg-brand-forest/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center space-y-6 font-heading font-black uppercase tracking-widest text-lg w-full px-6">
          <Link to="/games" onClick={toggleMenu} className="hover:text-brand-lime transition-all duration-300 w-full text-center py-4 border-b border-white/10">Browse Games</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-brand-lime transition-all duration-300 w-full text-center py-4 border-b border-white/10">The Clan</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-brand-lime transition-all duration-300 w-full text-center py-4 border-b border-white/10">Support</Link>
          
          <div className="pt-8 w-full flex flex-col space-y-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={toggleMenu} className="bg-brand-lime text-brand-forest px-6 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(200,249,2,0.3)] transition-all w-full text-center">Dashboard</Link>
                <button onClick={() => { logout(); toggleMenu(); navigate('/'); }} className="text-white/40 hover:text-white transition-opacity py-4">Logout</button>
              </>
            ) : (
              <button onClick={() => { toggleMenu(); openAuthModal(); }} className="bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl transition-all border border-white/10 w-full text-center">LOGIN / JOIN</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
