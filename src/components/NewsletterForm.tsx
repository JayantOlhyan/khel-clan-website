// src/components/NewsletterForm.tsx
import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const subscribeNewsletter = useAppStore(state => state.subscribeNewsletter);
  const subscribed = useAppStore(state => state.newsletterSubscribed);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeNewsletter(email);
      setEmail('');
    }
  };

  return (
    <section className="py-12 bg-brand-primary text-white" id="newsletter">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-heading mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter for the latest games and offers.</p>
        {subscribed ? (
          <p className="font-body">✅ You are subscribed!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <button
              type="submit"
              className="bg-brand-accent text-white px-4 py-2 rounded hover:bg-brand-secondary transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
