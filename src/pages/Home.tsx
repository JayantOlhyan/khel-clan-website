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



