import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, User, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import AuthSidePanel from '../../components/AuthSidePanel';

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle signup logic here
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-[#05110a] font-body text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side (Hidden on Mobile) */}
        <AuthSidePanel />

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto bg-[#0a1a12]">
          
          <div className="w-full max-w-[480px]">
            {/* Mobile Header */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-10">
              <div className="text-brand-lime font-black text-3xl italic tracking-tighter">KC</div>
              <div>
                <div className="text-white font-black text-xl leading-none tracking-tight">KHEL CLAN</div>
                <div className="text-brand-lime text-[8px] font-bold uppercase tracking-widest mt-0.5">Play Together. Grow Together.</div>
              </div>
            </div>

            <div className="text-right mb-8">
              <span className="text-gray-400 text-sm">Already have an account? </span>
              <Link to="/login" className="text-brand-lime font-bold text-sm hover:underline">Log in</Link>
            </div>

            <h2 className="font-heading font-black text-4xl mb-3">Create Your Account</h2>
            <p className="text-gray-400 mb-8">Join Khel Clan and start your journey today.</p>

            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-10 px-2 relative">
               <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -z-10 -translate-y-1/2"></div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-brand-lime text-[#05110a] font-bold flex items-center justify-center text-sm border-2 border-[#0a1a12]">1</div>
                 <div className="text-[10px] font-bold text-brand-lime uppercase tracking-widest">Account</div>
                 <div className="h-0.5 w-12 bg-brand-lime mt-1 rounded-full"></div>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#05110a] text-gray-500 font-bold flex items-center justify-center text-sm border-2 border-white/20">2</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Profile</div>
                 <div className="h-0.5 w-12 bg-transparent mt-1"></div>
               </div>
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#05110a] text-gray-500 font-bold flex items-center justify-center text-sm border-2 border-white/20">3</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Preferences</div>
                 <div className="h-0.5 w-12 bg-transparent mt-1"></div>
               </div>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 mt-2">This will be your unique identity on Khel Clan.</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Phone Number</label>
                <div className="flex bg-[#05110a] border border-white/10 rounded-xl overflow-hidden focus-within:border-brand-lime/50 focus-within:ring-1 focus-within:ring-brand-lime/50 transition-colors">
                  <div className="flex items-center gap-2 pl-4 pr-3 py-3.5 border-r border-white/10 cursor-pointer hover:bg-white/5">
                    <span className="text-lg leading-none">🇮🇳</span>
                    <span className="text-gray-300 text-sm font-bold">+91</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <input
                    type="tel"
                    className="w-full bg-transparent py-3.5 px-4 text-white focus:outline-none"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <p className="text-[10px] text-gray-500 mt-2">We'll send you a verification code</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-11 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                    placeholder="Create a strong password"
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
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-11 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                    placeholder="Confirm your password"
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

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="mt-0.5 w-4 h-4 shrink-0 rounded border border-white/20 bg-[#05110a] group-hover:border-brand-lime/50 flex items-center justify-center transition-colors">
                    {/* Checkbox state can be added here */}
                  </div>
                  <span className="text-xs text-gray-400 leading-tight">
                    I agree to the <Link to="/terms" className="text-brand-lime hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-brand-lime hover:underline">Privacy Policy</Link>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors mt-4"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">OR</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <div className="space-y-3 mb-10">
              <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>
              <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.53.11 2.82.74 3.61 1.95-3.08 1.83-2.56 5.86.37 7.07-.64 1.54-1.41 3-2.56 4.05zm-4.75-14.8c-.1-1.8 1.34-3.39 3.09-3.48.24 1.87-1.48 3.39-3.09 3.48z"/></svg>
                Sign up with Apple
              </button>
              <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
                Sign up with Facebook
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Shield size={14} className="text-gray-500" />
              We never share your details with anyone.
            </div>

          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[#05110a] border-t border-white/10 py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/help" className="hover:text-white transition-colors">Help Center</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
        <div>© 2025 Khel Clan. All rights reserved.</div>
      </div>
    </div>
  );
}
