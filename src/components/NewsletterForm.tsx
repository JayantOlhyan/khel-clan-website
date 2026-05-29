// src/components/NewsletterForm.tsx
import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';

interface Props {
  variant?: 'section' | 'compact';
}

export default function NewsletterForm({ variant = 'section' }: Props) {
  const [phone, setPhone] = useState('');
  const subscribeNewsletter = useAppStore(state => state.subscribeNewsletter);
  const subscribed = useAppStore(state => state.newsletterSubscribed);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      subscribeNewsletter(phone);
      setPhone('');
    }
  };

  const isCompact = variant === 'compact';

  const formContent = (
    <>
      {!isCompact && (
        <>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 animate-fadeIn">Join the Clan</h2>
          <p className="text-lg text-white/70 mb-10 animate-fadeIn animation-delay-100">
            Get game alerts, early-bird slots, and professional sport tips via WhatsApp.
          </p>
        </>
      )}
      
      {subscribed ? (
        <p className="font-heading font-bold text-brand-lime">✅ You are on the list!</p>
      ) : (
        <form onSubmit={handleSubmit} className={`flex flex-col ${isCompact ? 'space-y-3' : 'sm:flex-row items-center justify-center gap-3'}`}>
          <input
            type="tel"
            placeholder={isCompact ? "WhatsApp Number" : "ENTER WHATSAPP NUMBER"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            className={`bg-white/10 border-2 border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-lime transition-all font-body text-sm w-full ${!isCompact && 'sm:w-80'}`}
          />
          <button
            type="submit"
            className={`bg-brand-lime text-brand-forest px-6 py-3 rounded-xl font-heading font-black text-sm hover:shadow-[0_0_20px_rgba(200,249,2,0.4)] transition-all active:scale-95 uppercase tracking-wider w-full`}
          >
            Subscribe
          </button>
        </form>
      )}
    </>
  );

  if (isCompact) {
    return <div className="w-full">{formContent}</div>;
  }

  return (
    <section className="py-24 bg-brand-forest text-white" id="newsletter">
      <div className="max-w-xl mx-auto text-center px-4">
        {formContent}
      </div>
    </section>
  );
}
