// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative w-full bg-brand-forest text-white pt-24 pb-12 overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-5 translate-y-1/2">
        <h2 className="text-[20vw] font-heading font-black leading-none tracking-tighter text-white whitespace-nowrap outline-text text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
          KHEL CLAN
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="mb-6 block">
              <img src="/logo.png" alt="KhelClan Logo" className="h-12 w-12 rounded-full object-contain bg-white p-1" />
            </Link>
            <p className="text-white/50 font-body text-sm leading-relaxed">
              Empowering athletes through innovation and convenience. Redefining the way you play and share.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-bold text-xs mb-6 text-brand-lime uppercase tracking-[0.2em]">Explore</h4>
            <ul className="space-y-2 font-body text-sm text-white/50">
              <li><Link to="/games" className="hover:text-white transition">Find Games</Link></li>
              <li><Link to="/players" className="hover:text-white transition">Find Players</Link></li>
              <li><Link to="/groups" className="hover:text-white transition">Groups</Link></li>
              <li><Link to="/sports" className="hover:text-white transition">Sports</Link></li>
              <li><Link to="/venues" className="hover:text-white transition">Venues</Link></li>
              <li><Link to="/events" className="hover:text-white transition">Events</Link></li>
            </ul>
          </div>

          {/* KhelClan */}
          <div>
            <h4 className="font-heading font-bold text-xs mb-6 text-brand-lime uppercase tracking-[0.2em]">KhelClan</h4>
            <ul className="space-y-2 font-body text-sm text-white/50">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/download" className="hover:text-white transition">Download App</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-xs mb-6 text-brand-lime uppercase tracking-[0.2em]">Support</h4>
            <ul className="space-y-2 font-body text-sm text-white/50">
              <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-white transition">Safety</Link></li>
              <li><Link to="/community-guidelines" className="hover:text-white transition">Community Guidelines</Link></li>
              <li><Link to="/feedback" className="hover:text-white transition">Feedback</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-xs mb-6 text-brand-lime uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-2 font-body text-sm text-white/50">
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 text-center text-white/30 font-body text-xs">
          <p>© {new Date().getFullYear()} KHELCLAN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
