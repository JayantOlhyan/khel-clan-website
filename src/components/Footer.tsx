// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Globe, MessageSquare, Video } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

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
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block">
              <img src="/logo.png" alt="KhelClan Logo" className="h-12 w-12 rounded-full object-contain bg-white p-1" />
            </Link>
            <p className="text-white/50 font-body mb-8 text-sm leading-relaxed">
              Empowering athletes through innovation and convenience. Redefining the way you play and share.
            </p>
            <div className="flex space-x-3">
              {[Share2, MessageSquare, Globe, Video].map((Icon, idx) => (
                <a key={idx} href="#" className="w-11 h-11 border-2 border-white/30 bg-white/10 rounded-full flex items-center justify-center text-white shadow-sm hover:bg-brand-lime hover:text-brand-forest hover:border-brand-lime hover:scale-110 transition-all duration-300">
                  <Icon size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-heading font-bold text-xs mb-8 text-brand-lime uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4 font-body text-sm text-white/40">
              <li><Link to="/games" className="hover:text-white transition">Browse Games</Link></li>
              <li><Link to="/sports" className="hover:text-white transition">Sports Categories</Link></li>
              <li><Link to="/locations" className="hover:text-white transition">Venue Locations</Link></li>
              <li><Link to="/corporate" className="hover:text-white transition">For Corporate</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-xs mb-8 text-brand-lime uppercase tracking-[0.2em]">Support</h4>
            <ul className="space-y-4 font-body text-sm text-white/40">
              <li><Link to="/faq" className="hover:text-white transition">Help Center & FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Support</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Use</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="font-heading font-bold text-xs mb-6 text-brand-lime uppercase tracking-[0.2em]">WhatsApp Updates</h4>
            <p className="text-white/40 font-body mb-6 text-xs">Get instant alerts about new slots and game highlights via WhatsApp.</p>
            <NewsletterForm variant="compact" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 font-body text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 KHELCLAN. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
             <a href="#" className="hover:text-white transition">LinkedIn</a>
             <a href="#" className="hover:text-white transition">Instagram</a>
             <a href="#" className="hover:text-white transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
