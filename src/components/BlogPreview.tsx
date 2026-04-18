// src/components/BlogPreview.tsx
import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from './BlogCard';

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);
  return (
    <section className="py-12 bg-muted-green" id="blog-preview">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-deep-black mb-8 text-center animate-fadeIn">From Our Blog</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
