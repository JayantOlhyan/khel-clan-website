import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowLeft, Send, MessageSquare } from 'lucide-react';
import AuthSidePanel from '../../components/AuthSidePanel';

export default function ForgotPassword() {
  const [useSms, setUseSms] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset logic
  };

  return (
    <div className="min-h-screen bg-[#05110a] font-body text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side (Hidden on Mobile) */}
        <AuthSidePanel />

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto bg-[#0a1a12]">
          
          <div className="w-full max-w-[440px] flex flex-col min-h-full">
            
            {/* Top Navigation */}
            <div className="mb-12">
              <Link to="/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to <span className="text-brand-lime">Login</span>
              </Link>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <div className="text-center mb-10">
                <h2 className="font-heading font-black text-4xl mb-4">Forgot Password?</h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  No worries! Enter your registered {useSms ? 'phone number' : 'email or phone number'} and we'll send you a link to reset your password.
                </p>
              </div>

              {/* Illustration Area */}
              <div className="relative w-40 h-40 mx-auto mb-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-lime/5 rounded-full blur-2xl"></div>
                
                {/* Custom Envelope Icon SVG mimicking the mockup */}
                <div className="relative z-10 text-gray-300 drop-shadow-2xl">
                   <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="35" width="80" height="60" rx="4" fill="#111827" stroke="#374151" strokeWidth="2"/>
                      <path d="M20 35L60 65L100 35" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M40 75L20 95M100 95L80 75" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      
                      {/* Lock */}
                      <rect x="52" y="55" width="16" height="14" rx="2" fill="#C8F902"/>
                      <path d="M55 55V49C55 46.2386 57.2386 44 60 44C62.7614 44 65 46.2386 65 49V55" stroke="#C8F902" strokeWidth="2"/>
                      <circle cx="60" cy="62" r="2" fill="#05110a"/>
                      
                      {/* Paper Plane */}
                      <path d="M85 30L95 20L100 35L85 30Z" fill="none" stroke="#FBBF24" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M87 31L91 26" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round"/>
                   </svg>
                </div>
              </div>

              <form onSubmit={handleReset} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    {useSms ? 'Phone Number' : 'Email or Phone Number'}
                  </label>
                  
                  {useSms ? (
                    <div className="flex bg-[#05110a] border border-white/10 rounded-xl overflow-hidden focus-within:border-brand-lime/50 focus-within:ring-1 focus-within:ring-brand-lime/50 transition-colors">
                      <div className="flex items-center gap-2 pl-4 pr-3 py-3.5 border-r border-white/10">
                        <span className="text-lg leading-none">🇮🇳</span>
                        <span className="text-gray-300 text-sm font-bold">+91</span>
                      </div>
                      <input
                        type="tel"
                        className="w-full bg-transparent py-3.5 px-4 text-white focus:outline-none"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                        <Mail size={18} />
                      </div>
                      <input
                        type="text"
                        className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                        placeholder="Enter your email or phone number"
                        required
                      />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors mt-2"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              <button 
                onClick={() => setUseSms(!useSms)}
                className="w-full bg-transparent border border-white/10 hover:border-white/30 text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-colors mb-12"
              >
                {useSms ? <Mail size={18} /> : <Phone size={18} />}
                Reset via {useSms ? 'Email' : 'SMS'}
              </button>

              <div className="text-center">
                <span className="text-gray-400 text-sm">Remember your password? </span>
                <Link to="/login" className="text-brand-lime font-bold text-sm hover:underline">Login</Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
