import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { useState } from 'react';

export default function Header() {
  const { isAuthenticated, openAuthModal, logout } = useAppStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-brand-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="KhelClan" className="w-9 h-9 rounded-full object-contain bg-white p-1 shadow-sm" />
          <span className="text-2xl font-heading font-bold text-white group-hover:text-brand-accent transition-colors">Khel<span className="text-brand-accent group-hover:text-white">Clan</span></span>
        </Link>
        <nav className="hidden md:flex space-x-6 font-body">
          <Link to="/" className="hover:text-brand-secondary transition">Home</Link>
          <Link to="/games" className="hover:text-brand-secondary transition">Games</Link>
          <Link to="/blog" className="hover:text-brand-secondary transition">Blog</Link>
          <Link to="/faq" className="hover:text-brand-secondary transition">FAQ</Link>
          <Link to="/contact" className="hover:text-brand-secondary transition">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="bg-brand-accent text-white px-4 py-2 rounded-lg hover:bg-brand-secondary transition">Dashboard</Link>
              <button onClick={logout} className="text-white/70 hover:text-white transition">Logout</button>
            </>
          ) : (
            <button onClick={openAuthModal} className="bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition">Login / Join</button>
          )}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-brand-primary text-white p-4 space-y-3 font-body">
          <Link to="/" onClick={toggleMenu} className="block hover:text-brand-secondary transition">Home</Link>
          <Link to="/games" onClick={toggleMenu} className="block hover:text-brand-secondary transition">Games</Link>
          <Link to="/blog" onClick={toggleMenu} className="block hover:text-brand-secondary transition">Blog</Link>
          <Link to="/faq" onClick={toggleMenu} className="block hover:text-brand-secondary transition">FAQ</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-brand-secondary transition">Contact</Link>
        </nav>
      )}
    </header>
  );
}
