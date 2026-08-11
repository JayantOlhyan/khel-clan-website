// src/pages/Contact.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted-green flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[32px] p-10 text-center shadow-2xl animate-scaleIn">
          <div className="w-24 h-24 bg-brand-lime/20 text-brand-forest rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Send size={44} />
          </div>
          <h2 className="text-4xl font-heading font-black text-brand-forest mb-4">Message Transmitted</h2>
          <p className="text-gray-500 font-body mb-10 leading-relaxed">
            Your inquiry has reached the Clan. Our elite support team will respond within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-brand-forest text-white py-5 rounded-2xl font-heading font-black shadow-lg hover:bg-black transition transform active:scale-95 tracking-widest text-sm"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted-green min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            Have a question about a venue or your next booking? The Clan is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slideUp">
            <h2 className="text-3xl font-heading font-black text-brand-forest mb-8">Contact Information</h2>
            
            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-50 group hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-lime/10 rounded-2xl flex items-center justify-center text-brand-forest flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-brand-forest">Email Us</h4>
                <p className="text-gray-500 font-body mt-1">hello@khelclan.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-50 group hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-lime/10 rounded-2xl flex items-center justify-center text-brand-forest flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-brand-forest">Call Us</h4>
                <p className="text-gray-500 font-body mt-1">+91 96673 44125</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-50 group hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-lime/10 rounded-2xl flex items-center justify-center text-brand-forest flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-heading font-black text-xl text-brand-forest">Our Hub</h4>
                <p className="text-gray-500 font-body mt-1">Sector 45, Gurugram, India</p>
              </div>
            </div>
            
            <div className="pt-8 grid grid-cols-2 gap-6">
               <div className="bg-brand-forest p-8 rounded-[32px] text-white shadow-xl">
                  <span className="text-4xl font-black text-brand-lime">24/7</span>
                  <p className="text-sm font-heading font-bold uppercase tracking-widest mt-2 opacity-60">Support</p>
               </div>
               <div className="bg-white p-8 rounded-[32px] border-2 border-brand-forest/5 shadow-sm">
                  <span className="text-4xl font-black text-brand-forest">&lt;1hr</span>
                  <p className="text-sm font-heading font-bold uppercase tracking-widest mt-2 text-gray-400">Response</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-white animate-slideUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-autofit gap-6">
                <div>
                  <label className="block text-xs font-heading font-black text-brand-forest mb-3 uppercase tracking-[0.2em]">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="E.G. JAYANT OLHYAN"
                    className="w-full bg-gray-50 px-5 py-4 rounded-2xl border-2 border-transparent focus:border-brand-lime focus:bg-white focus:ring-0 transition-all font-body text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-black text-brand-forest mb-3 uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="HELLO@KHELCLAN.COM"
                    className="w-full bg-gray-50 px-5 py-4 rounded-2xl border-2 border-transparent focus:border-brand-lime focus:bg-white focus:ring-0 transition-all font-body text-sm" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-heading font-black text-brand-forest mb-3 uppercase tracking-[0.2em]">Subject</label>
                <input 
                  type="text" 
                  required 
                  placeholder="BOOKING INQUIRY"
                  className="w-full bg-gray-50 px-5 py-4 rounded-2xl border-2 border-transparent focus:border-brand-lime focus:bg-white focus:ring-0 transition-all font-body text-sm" 
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-black text-brand-forest mb-3 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  required 
                  rows={5}
                  placeholder="WHATS ON YOUR MIND?"
                  className="w-full bg-gray-50 px-5 py-4 rounded-2xl border-2 border-transparent focus:border-brand-lime focus:bg-white focus:ring-0 transition-all font-body text-sm resize-none" 
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-forest text-white py-5 rounded-2xl font-heading font-black shadow-lg hover:shadow-brand-forest/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center tracking-widest text-sm"
              >
                TRANSMIT MESSAGE <Send size={18} className="ml-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
