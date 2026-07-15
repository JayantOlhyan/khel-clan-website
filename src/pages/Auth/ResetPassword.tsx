import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import AuthSidePanel from '../../components/AuthSidePanel';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
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
              
              {/* Illustration Area */}
              <div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-brand-lime/20 rounded-full bg-brand-lime/5"></div>
                <div className="absolute inset-4 border border-brand-lime/40 rounded-full border-dashed"></div>
                
                {/* Lock SVG */}
                <div className="relative z-10 text-brand-lime drop-shadow-[0_0_15px_rgba(200,249,2,0.3)]">
                   <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="22" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
                      <path d="M12 22V12C12 7.58172 15.5817 4 20 4C24.4183 4 28 7.58172 28 12V22" stroke="currentColor" strokeWidth="2.5"/>
                      <circle cx="20" cy="32" r="2.5" fill="currentColor"/>
                      
                      {/* Decorative sparkles */}
                      <path d="M38 10L36 12M2 10L4 12M32 2L30 4M8 2L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                   </svg>
                </div>
              </div>

              <div className="text-center mb-10">
                <h2 className="font-heading font-black text-4xl mb-4">Reset Your Password</h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                  Enter your new password below. Make sure it's strong and secure.
                </p>
              </div>

              <form onSubmit={handleReset} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-11 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                      defaultValue="••••••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  
                  {/* Strength Indicator */}
                  <div className="mt-4">
                    <div className="flex gap-2 mb-2">
                       <div className="h-1 flex-1 bg-brand-lime rounded-full"></div>
                       <div className="h-1 flex-1 bg-brand-lime rounded-full"></div>
                       <div className="h-1 flex-1 bg-brand-lime rounded-full"></div>
                       <div className="h-1 flex-1 bg-brand-lime/20 rounded-full"></div>
                    </div>
                    <div className="text-right text-[10px] font-bold text-brand-lime uppercase tracking-widest">Strong</div>
                  </div>

                  <div className="mt-4 space-y-2">
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <CheckCircle size={14} className="text-brand-lime shrink-0" /> At least 8 characters
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <CheckCircle size={14} className="text-brand-lime shrink-0" /> Include uppercase & lowercase letters
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <CheckCircle size={14} className="text-brand-lime shrink-0" /> Include a number or special character
                     </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Confirm New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-11 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                      defaultValue="••••••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors mt-2 flex justify-center items-center gap-2"
                >
                  Reset Password <ArrowRight size={20}/>
                </button>
              </form>

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
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
