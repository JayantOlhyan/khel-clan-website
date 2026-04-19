// src/components/TestimonialCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel() {
  return (
    <section className="py-24 bg-muted-green" id="testimonials">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-deep-black mb-16 text-center animate-fadeIn">Voices of the Community</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-64"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="flex flex-col items-center text-center px-4">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4" />
                <p className="text-lg font-body italic mb-2">"{t.quote}"</p>
                <p className="font-heading font-semibold">- {t.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
