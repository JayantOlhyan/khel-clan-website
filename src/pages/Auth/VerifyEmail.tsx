import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Clock, Lock } from 'lucide-react';
import AuthSidePanel from '../../components/AuthSidePanel';

export default function VerifyEmail() {
  const handleResend = () => {
    // Handle resend logic
  };

  return (
    <div className="min-h-screen bg-[#05110a] font-body text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side (Hidden on Mobile) */}
        <AuthSidePanel />

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto bg-[#0a1a12]">
          
          <div className="w-full max-w-[440px] flex flex-col min-h-full">
            
            <div className="flex-grow flex flex-col justify-center">
              
              {/* Illustration Area */}
              <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-lime/10 rounded-full blur-3xl"></div>
                
                {/* Custom Envelope SVG matching the mockup */}
                <div className="relative z-10 drop-shadow-2xl">
                   <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Back of envelope */}
                      <path d="M10 30L80 75L150 30V100C150 105.523 145.523 110 140 110H20C14.4772 110 10 105.523 10 100V30Z" fill="#1F2937"/>
                      
                      {/* Paper sticking out */}
                      <rect x="35" y="10" width="90" height="70" rx="4" fill="#F3F4F6"/>
                      
                      {/* Checkmark in circle on the paper */}
                      <circle cx="80" cy="45" r="18" fill="#C8F902"/>
                      <path d="M72 45L77 50L88 39" stroke="#05110a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      
                      {/* Front flaps of envelope */}
                      <path d="M10 30L80 80L150 30" fill="#374151"/>
                      <path d="M10 100L65 65" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M150 100L95 65" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
                      
                      {/* Decorative dots/stars */}
                      <circle cx="20" cy="10" r="2" fill="#C8F902"/>
                      <circle cx="140" cy="20" r="3" fill="#C8F902" opacity="0.6"/>
                      <circle cx="130" cy="90" r="2" fill="#C8F902"/>
                      <circle cx="30" cy="80" r="2" fill="#C8F902" opacity="0.4"/>
                      <path d="M100 15L102 10L107 8L102 6L100 1L98 6L93 8L98 10L100 15Z" fill="#C8F902" opacity="0.8"/>
                   </svg>
                </div>
              </div>

              <div className="text-center mb-10">
                <h2 className="font-heading font-black text-4xl mb-4">Verify Your Email</h2>
                <p className="text-gray-300 mb-2 text-lg">
                  We've sent a verification link to
                </p>
                <div className="font-bold text-brand-lime text-xl mb-6">
                  jayant.olhyan@gmail.com
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Click the link in the email to verify your account and start playing with Khel Clan.
                </p>
              </div>

              <div className="bg-[#05110a] border border-white/10 rounded-2xl p-5 mb-8 flex gap-4">
                 <div className="shrink-0 mt-0.5 text-brand-lime">
                   <Clock size={20} />
                 </div>
                 <div>
                   <h4 className="font-bold text-white text-sm mb-1">Didn't receive the email?</h4>
                   <p className="text-sm text-gray-400">
                     Check your spam or junk folder. If you still don't see it, <button onClick={handleResend} className="text-brand-lime hover:underline">resend the email</button>.
                   </p>
                 </div>
              </div>

              <button
                onClick={handleResend}
                className="w-full bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors flex justify-center items-center gap-3"
              >
                <Mail size={20} /> Resend Verification Email
              </button>

              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              <div className="text-center mb-12">
                <Link to="/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold group">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to <span className="text-brand-lime">Login</span>
                </Link>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-auto">
                 <Lock size={14} /> Your account is safe with us.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
