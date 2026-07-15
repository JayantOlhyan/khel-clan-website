import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Calendar, Camera, ArrowRight, UserCheck, Flag } from 'lucide-react';
import AuthSidePanel from '../../components/AuthSidePanel';

export default function Onboarding() {
  const navigate = useNavigate();
  const [role, setRole] = useState('player');
  const [skill, setSkill] = useState('intermediate');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#05110a] font-body text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Side (Hidden on Mobile) */}
        <AuthSidePanel />

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex justify-center p-6 sm:p-10 lg:p-12 relative overflow-y-auto bg-[#0a1a12]">
          
          <div className="w-full max-w-[500px] py-8">
            
            {/* Step Indicator Header */}
            <div className="flex justify-end mb-8">
              <span className="text-gray-400 text-sm font-bold">Step 1 of 5</span>
            </div>

            {/* Stepper UI */}
            <div className="flex items-center justify-between mb-12 px-2 relative">
               <div className="absolute top-4 left-0 right-0 h-[2px] bg-white/10 -z-10"></div>
               
               {/* Step 1 */}
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-brand-lime text-[#05110a] font-bold flex items-center justify-center text-sm border-2 border-[#0a1a12] relative z-10">1</div>
                 <div className="text-[10px] font-bold text-brand-lime uppercase tracking-widest whitespace-nowrap">Welcome</div>
                 <div className="h-0.5 w-full bg-brand-lime mt-1 rounded-full absolute top-[15px] left-0 right-1/2 -z-10"></div>
               </div>
               
               {/* Step 2 */}
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#05110a] text-gray-500 font-bold flex items-center justify-center text-sm border-2 border-white/20 relative z-10">2</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">About You</div>
               </div>
               
               {/* Step 3 */}
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#05110a] text-gray-500 font-bold flex items-center justify-center text-sm border-2 border-white/20 relative z-10">3</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Your Sports</div>
               </div>
               
               {/* Step 4 */}
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#05110a] text-gray-500 font-bold flex items-center justify-center text-sm border-2 border-white/20 relative z-10">4</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Preferences</div>
               </div>
               
               {/* Step 5 */}
               <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#05110a] text-gray-500 font-bold flex items-center justify-center text-sm border-2 border-white/20 relative z-10">5</div>
                 <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Finish</div>
               </div>
            </div>

            <h2 className="font-heading font-black text-3xl mb-2">Let's Get Started 🚀</h2>
            <p className="text-gray-400 mb-8 text-sm">Tell us a bit about yourself to personalize your Khel Clan experience.</p>

            <form onSubmit={handleNext} className="space-y-8">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">What should we call you?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Where are you located?</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <MapPin size={18} />
                  </div>
                  <select
                    className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white appearance-none focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors cursor-pointer"
                  >
                    <option value="">Select your city</option>
                    <option value="new-delhi">New Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">What best describes you?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div 
                    onClick={() => setRole('player')}
                    className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center text-center transition-all ${role === 'player' ? 'bg-[#05110a] border-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.1)]' : 'bg-[#05110a] border-white/10 hover:border-white/30'}`}
                  >
                    <User size={24} className={`mb-3 ${role === 'player' ? 'text-brand-lime' : 'text-gray-400'}`}/>
                    <h4 className="font-bold text-sm mb-2 text-white">Player</h4>
                    <p className="text-xs text-gray-500 mb-4">I want to play and join games.</p>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${role === 'player' ? 'bg-brand-lime border-brand-lime text-[#05110a]' : 'border-white/20'}`}>
                      {role === 'player' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                    </div>
                  </div>

                  <div 
                    onClick={() => setRole('manager')}
                    className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center text-center transition-all ${role === 'manager' ? 'bg-[#05110a] border-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.1)]' : 'bg-[#05110a] border-white/10 hover:border-white/30'}`}
                  >
                    <UserCheck size={24} className={`mb-3 ${role === 'manager' ? 'text-brand-lime' : 'text-gray-400'}`}/>
                    <h4 className="font-bold text-sm mb-2 text-white">Team Manager</h4>
                    <p className="text-xs text-gray-500 mb-4">I manage a team or organization.</p>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${role === 'manager' ? 'bg-brand-lime border-brand-lime text-[#05110a]' : 'border-white/20'}`}>
                      {role === 'manager' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                    </div>
                  </div>

                  <div 
                    onClick={() => setRole('organizer')}
                    className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center text-center transition-all ${role === 'organizer' ? 'bg-[#05110a] border-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.1)]' : 'bg-[#05110a] border-white/10 hover:border-white/30'}`}
                  >
                    <Flag size={24} className={`mb-3 ${role === 'organizer' ? 'text-brand-lime' : 'text-gray-400'}`}/>
                    <h4 className="font-bold text-sm mb-2 text-white">Organizer</h4>
                    <p className="text-xs text-gray-500 mb-4">I organize games or tournaments.</p>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${role === 'organizer' ? 'bg-brand-lime border-brand-lime text-[#05110a]' : 'border-white/20'}`}>
                      {role === 'organizer' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Skill Level Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">What is your skill level?</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'beginner', label: 'Beginner', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h2V12H4v6zm6 0h2V9h-2v9zM18 6h-2v12h2V6z"/></svg> },
                    { id: 'intermediate', label: 'Intermediate', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h2v-3H4v3zm6 0h2V9h-2v9zm6 0h2V6h-2v12z"/></svg> },
                    { id: 'advanced', label: 'Advanced', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h2v-6H4v6zm6 0h2V6h-2v12zm6 0h2V3h-2v15z"/></svg> },
                    { id: 'professional', label: 'Professional', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg> }
                  ].map((s) => (
                    <div 
                      key={s.id}
                      onClick={() => setSkill(s.id)}
                      className={`cursor-pointer rounded-xl border p-3 flex flex-col items-center justify-center text-center transition-all relative ${skill === s.id ? 'bg-[#05110a] border-brand-lime text-brand-lime' : 'bg-[#05110a] border-white/10 hover:border-white/30 text-gray-400'}`}
                    >
                      <div className="mb-2 opacity-80">{s.icon}</div>
                      <span className={`text-xs font-bold ${skill === s.id ? 'text-white' : ''}`}>{s.label}</span>
                      
                      {skill === s.id && (
                        <div className="absolute -bottom-2 w-4 h-4 rounded-full bg-brand-lime flex items-center justify-center text-[#05110a]">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* DOB */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Your date of birth <span className="text-gray-500 font-normal">(optional)</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Calendar size={18} />
                  </div>
                  <input
                    type="text"
                    className="w-full bg-[#05110a] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-brand-lime/50 focus:ring-1 focus:ring-brand-lime/50 transition-colors"
                    placeholder="DD / MM / YYYY"
                  />
                </div>
                <p className="text-[10px] text-gray-500 mt-2">This helps us personalize age-specific tournaments and groups.</p>
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">Profile Picture <span className="text-gray-500 font-normal">(optional)</span></label>
                <div className="border border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center bg-[#05110a] hover:bg-white/5 transition-colors cursor-pointer group">
                  <Camera size={24} className="text-gray-500 mb-3 group-hover:text-brand-lime transition-colors" />
                  <div className="text-sm font-bold text-gray-300 mb-1">Upload a profile picture</div>
                  <div className="text-xs text-gray-500">JPG, PNG up to 5MB</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors flex justify-center items-center gap-2"
                >
                  Next <ArrowRight size={20} />
                </button>
                <div className="text-center mt-6">
                  <button type="button" onClick={() => navigate('/')} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Skip for now</button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
