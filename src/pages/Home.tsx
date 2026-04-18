import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import GameGrid from '../components/GameGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import NewsletterForm from '../components/NewsletterForm';
import BlogPreview from '../components/BlogPreview';
import FAQPreview from '../components/FAQPreview';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorks />
      <GameGrid />
      <TestimonialCarousel />
      <NewsletterForm />
      <BlogPreview />
      <FAQPreview />
      <ContactCTA />
    </div>
  );
}



export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 bg-muted-green border-4 border-muted-green relative overflow-hidden">
      
      {/* Background Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-primary-green/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-4xl text-center space-y-8 z-10 relative">
        <div className="inline-block px-4 py-1.5 rounded-full bg-energy-gold/10 text-energy-gold font-body text-sm font-bold tracking-wide mb-4">
          NOW IN YOUR CITY
        </div>
        <h1 className="text-6xl md:text-8xl font-heading font-black text-deep-black leading-tight tracking-tight">
          Find a game.<br/>
          Show up.<br/>
          Play.<br/>
          <span className="text-primary-green block mt-2 drop-shadow-sm">Leave with your clip.</span>
        </h1>
        <p className="text-xl text-deep-black/60 font-body max-w-2xl mx-auto font-medium">
          The premium platform for competitive and casual play. Join the clan, climb the ranks, and download your best highlights directly to your phone.
        </p>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/games" className="w-full sm:w-auto bg-primary-green text-muted-green px-10 py-4 rounded-xl text-lg font-heading font-bold shadow-xl hover:bg-green-800 transition-all hover:-translate-y-1 active:scale-95 text-center">
            Browse Games
          </Link>
          <Link to="/about" className="w-full sm:w-auto bg-transparent border-2 border-deep-black/20 text-deep-black px-10 py-4 rounded-xl text-lg font-heading font-bold hover:bg-deep-black/5 transition-all text-center">
            How it works
          </Link>
        </div>
      </div>
    </div>
  );
}
