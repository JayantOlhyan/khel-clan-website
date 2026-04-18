import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Globe, MessageSquare, Video } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="w-full bg-deep-black text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-heading font-black tracking-tighter text-muted-green mb-4 block">
              KHEL<span className="text-brand-accent">CLAN</span>
            </Link>
            <p className="text-white/60 font-body mb-6">
              Empowering athletes with the tools to book, play, and share their journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-brand-accent transition"><Share2 size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition"><MessageSquare size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition"><Globe size={20} /></a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition"><Video size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-accent uppercase tracking-widest text-sm">Platform</h4>
            <ul className="space-y-4 font-body text-white/60">
              <li><Link to="/games" className="hover:text-white transition">Browse Games</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Stories</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-accent uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 font-body text-white/60">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Partner with Us</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-heading font-bold text-lg mb-6 text-brand-accent uppercase tracking-widest text-sm">Join the Clan</h4>
            <p className="text-white/60 font-body mb-4 text-sm">Get notified about new game slots and exclusive rewards.</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 font-body text-sm">
          <p>© 2026 KhelClan. Built for the modern athlete.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Made with ❤️ for Sports</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
