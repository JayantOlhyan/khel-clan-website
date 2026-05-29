import React, { useState } from 'react';
import { ShieldCheck, Calendar, Users, Award, Briefcase, Sparkles, Send, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Wellness Match',
    price: '₹5,000',
    frequency: 'per session',
    desc: 'Regular friendly matches to promote health, active habits, and stress relief.',
    features: [
      'Pristine field/court booking',
      'Referees & field support',
      'Hydration & refreshments'
    ]
  },
  {
    name: 'Corporate Cup',
    price: 'Custom Pricing',
    frequency: 'tournament package',
    desc: 'Full-scale corporate competitive leagues. Turn coworkers into legends.',
    features: [
      'Custom tournament brackets',
      'Live highlights recorded',
      'Trophies & custom medals',
      'Corporate branding on turf'
    ],
    popular: true
  },
  {
    name: 'Ultimate Retreat',
    price: 'Custom Pricing',
    frequency: 'all-inclusive event',
    desc: 'Sports-driven team bonding days with tailored challenges and luxury catering.',
    features: [
      'Multi-sport activities',
      'Certified team-bonding coaches',
      'Live dynamic MC & audio system',
      'Premium catering & dinner'
    ]
  }
];

export default function ForCorporate() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    package: 'Wellness Match',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ companyName: '', contactName: '', email: '', package: 'Wellness Match', details: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-brand-neutral/40 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <span className="px-4 py-1.5 rounded-full bg-brand-lime/20 text-brand-forest font-heading font-bold text-xs uppercase tracking-widest">
              KhelClan B2B
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest leading-tight">
              Corporate <br/>
              <span className="text-brand-flame underline decoration-wavy underline-offset-8">Playgrounds</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed">
              Supercharge your team's spirit, health, and cohesion. KhelClan curates premium athletic tournaments and corporate sports leagues designed to elevate connection.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <div className="p-3 bg-brand-lime/20 text-brand-forest rounded-2xl h-fit">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-forest text-base">Team Building</h4>
                  <p className="text-xs text-gray-500 font-body">Break team silos through shared goals.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-3 bg-brand-lime/20 text-brand-forest rounded-2xl h-fit">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-forest text-base">Epic Tourneys</h4>
                  <p className="text-xs text-gray-500 font-body">Highlight-reel moments, live ref team.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand-lime/25 rounded-[40px] transform rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
              alt="Corporate Retreat"
              className="relative rounded-[40px] shadow-2xl border-2 border-brand-forest object-cover w-full h-[450px]"
            />
          </div>
        </div>

        {/* Package Tiers */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-forest">Corporate Packages</h2>
            <p className="text-gray-500 font-body text-base">Flexible event schemes for small businesses up to Fortune 500 organizations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white rounded-[32px] p-8 border shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  tier.popular ? 'border-brand-flame border-2' : 'border-black/5'
                }`}
              >
                {tier.popular && (
                  <span className="absolute top-4 right-4 bg-brand-flame text-white font-heading font-bold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-heading font-black text-2xl text-brand-forest mb-4">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-heading font-black text-4xl text-brand-forest">{tier.price}</span>
                    <span className="text-xs text-gray-400 font-body">/ {tier.frequency}</span>
                  </div>
                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-8">{tier.desc}</p>

                  <ul className="space-y-4">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 font-body text-sm text-brand-forest/80">
                        <span className="p-1 rounded-full bg-brand-lime text-brand-forest">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setFormData({ ...formData, package: tier.name })}
                  className={`w-full py-4 rounded-2xl font-heading font-bold text-sm mt-10 transition-all ${
                    tier.popular
                      ? 'bg-brand-flame text-white hover:bg-brand-forest hover:shadow-lg'
                      : 'bg-brand-neutral hover:bg-brand-forest hover:text-white text-brand-forest'
                  }`}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-brand-forest rounded-[40px] text-white p-8 md:p-16 grid lg:grid-cols-2 gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime opacity-5 rounded-full -mr-24 -mt-24 pointer-events-none"></div>

          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-lime leading-tight">
              Ready to Host Your Match?
            </h2>
            <p className="text-white/70 font-body text-base leading-relaxed">
              Submit your info and our specialized events manager will reach out within 2 hours with customized field availability, menus, and logistics options.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-heading font-bold text-brand-lime uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Inc."
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-brand-lime transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-brand-lime uppercase tracking-wider mb-2">Contact Name</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-brand-lime transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-brand-lime uppercase tracking-wider mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@acme.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-brand-lime transition-all placeholder:text-white/20"
                />
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-brand-lime uppercase tracking-wider mb-2">Selected Tier</label>
                <select
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-brand-lime transition-all [&>option]:text-brand-forest"
                >
                  <option value="Wellness Match">Wellness Match</option>
                  <option value="Corporate Cup">Corporate Cup</option>
                  <option value="Ultimate Retreat">Ultimate Retreat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-heading font-bold text-brand-lime uppercase tracking-wider mb-2">Event Requirements / Details</label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about estimated date, guest numbers, etc."
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-brand-lime transition-all placeholder:text-white/20 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-4 rounded-xl bg-brand-lime hover:bg-brand-flame text-brand-forest hover:text-white font-heading font-bold text-sm flex items-center justify-center gap-2 group transition-all"
              >
                {submitted ? (
                  <>Sent! Check Your Inbox <Check size={18} /></>
                ) : (
                  <>Send Inquiry <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
