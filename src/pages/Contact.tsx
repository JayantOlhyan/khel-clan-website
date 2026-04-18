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
        <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-xl animate-scaleIn">
          <div className="w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={40} />
          </div>
          <h2 className="text-3xl font-heading font-black text-deep-black mb-4">Message Sent!</h2>
          <p className="text-deep-black/60 font-body mb-8">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-brand-primary text-white py-4 rounded-xl font-heading font-bold shadow-lg hover:bg-green-800 transition transform active:scale-95"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted-green min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-deep-black mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-deep-black/60 font-body max-w-2xl mx-auto">
            Have a question about a venue or your booking? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slideUp">
            <h2 className="text-3xl font-heading font-bold text-deep-black mb-6">Contact Information</h2>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg">Email Us</h4>
                <p className="text-deep-black/60 font-body">hello@khelclan.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg">Call Us</h4>
                <p className="text-deep-black/60 font-body">+91 96673 44125</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg">Our Office</h4>
                <p className="text-deep-black/60 font-body">KhelClan Sports Hub, Sector 45, Gurugram, India</p>
              </div>
            </div>
            
            <div className="pt-8 grid grid-cols-2 gap-4">
               <div className="bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/10">
                  <span className="text-3xl font-black text-brand-primary">24/7</span>
                  <p className="text-sm font-body text-deep-black/60 mt-1">Support Available</p>
               </div>
               <div className="bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/10">
                  <span className="text-3xl font-black text-brand-primary">&lt;1hr</span>
                  <p className="text-sm font-body text-deep-black/60 mt-1">Avg Response Time</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-white animate-slideUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-heading font-bold text-deep-black mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-muted-green px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-brand-primary transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-bold text-deep-black mb-2 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-muted-green px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-brand-primary transition" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-heading font-bold text-deep-black mb-2 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Inquiry about highlights"
                  className="w-full bg-muted-green px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-brand-primary transition" 
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold text-deep-black mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-muted-green px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-brand-primary transition resize-none" 
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-primary text-white py-4 rounded-xl font-heading font-bold shadow-lg hover:bg-green-800 transition transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
