// src/components/BlogPreview.tsx
import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from './BlogCard';

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="py-24 bg-muted-green" id="blog-preview">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-deep-black mb-16 text-center animate-fadeIn">Insights from the Pitch</h2>
        <div className="grid gap-8 grid-autofit">
          {latest.map((post, idx) => (
            <div key={post.id} className="animate-fadeIn" style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
