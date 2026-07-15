import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, User, Lock, Eye, EyeOff, Search, Shield } from 'lucide-react';
import AuthSidePanel from '../../components/AuthSidePanel';

export default function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'email' | 'username'>('email');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle authentication here
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#05110a] font-body text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side (Hidden on Mobile) */}
        <AuthSidePanel />

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto bg-[#0a1a12]">
          
          <div className="w-full max-w-[480px]">
            {/* Mobile Header (Hidden on Desktop) */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-10">
              <div className="text-brand-lime font-black text-3xl italic tracking-tighter">KC</div>
              <div>
                <div className="text-white font-black text-xl leading-none tracking-tight">KHEL CLAN</div>
                <div className="text-brand-lime text-[8px] font-bold uppercase tracking-widest mt-0.5">Play Together. Grow Together.</div>
              </div>
            </div>

            <div className="text-right mb-8">
              <span className="text-gray-400 text-sm">New to Khel Clan? </span>
              <Link to="/signup" className="text-brand-lime font-bold text-sm hover:underline">Sign up</Link>
            </div>

            <h2 className="font-heading font-black text-4xl mb-3">Welcome Back</h2>
            <p className="text-gray-400 mb-8">Login to your account and continue your game</p>

            <form onSubmit={handleLogin} className="space-y-6">
              
              {/* Tabs */}
              <div className="flex border-b border-white/10 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('email')}
                  className={`flex-1 pb-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                    activeTab === 'email' ? 'text-brand-lime border-b-2 border-brand-lime' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <Mail size={16} /> Email / Phone
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('username')}
                  className={`flex-1 pb-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                    activeTab === 'username' ? 'text-brand-lime border-b-2 border-brand-lime' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <User size={16} /> Username
                </button>
              </div>

              {/* Input Fields */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    {activeTab === 'email' ? 'Email or Phone Number' : 'Username'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                      {activeTab === 'email' ? <Phone size={18} /> : <User size={18} />}
                    </div>
                    <input
                      type={activeTab === 'email' ? 'text' : 'text'}
                      className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                      placeholder={activeTab === 'email' ? 'Enter your email or phone number' : 'Enter your username'}
                      required
                    />
                  </div>
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
                      placeholder="Enter your password"
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
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-white/20 bg-[#05110a] group-hover:border-brand-lime/50 flex items-center justify-center transition-colors">
                    {/* Checkbox state can be added here */}
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm font-bold text-brand-lime hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors mt-2"
              >
                Login
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
                Continue with Google
              </button>
              <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
                Continue with Facebook
              </button>
              <button className="w-full bg-transparent border border-white/10 hover:border-white/30 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.53.11 2.82.74 3.61 1.95-3.08 1.83-2.56 5.86.37 7.07-.64 1.54-1.41 3-2.56 4.05zm-4.75-14.8c-.1-1.8 1.34-3.39 3.09-3.48.24 1.87-1.48 3.39-3.09 3.48z"/></svg>
                Continue with Apple
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-8">
              <Shield size={14} className="text-gray-500" />
              We never share your details with anyone.
            </div>

            {/* App Promo Widget */}
            <div className="bg-[#05110a] border border-white/10 rounded-2xl p-5 flex items-center gap-4 overflow-hidden relative">
               <div className="w-24 h-32 flex-shrink-0 -mb-10 relative z-10">
                 <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover rounded-t-xl" alt="App Preview"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] to-transparent"></div>
               </div>
               <div className="relative z-10">
                 <h4 className="font-bold text-white text-sm mb-1">Take Khel Clan Everywhere</h4>
                 <p className="text-[10px] text-gray-400 mb-3">Download our app for the best experience on the go.</p>
                 <div className="flex gap-2">
                    <button className="bg-black border border-white/20 rounded md flex items-center justify-center px-2 py-1 hover:border-white/40 transition-colors">
                      <div className="flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-4"/>
                      </div>
                    </button>
                    <button className="bg-black border border-white/20 rounded md flex items-center justify-center px-2 py-1 hover:border-white/40 transition-colors">
                      <div className="flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-4"/>
                      </div>
                    </button>
                 </div>
               </div>
               
               {/* Decorative background elements inside widget */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/5 rounded-full blur-2xl"></div>
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
