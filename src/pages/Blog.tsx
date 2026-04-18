// src/pages/Blog.tsx
import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  return (
    <div className="bg-muted-green min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-deep-black mb-4">
            KhelClan Stories
          </h1>
          <p className="text-xl text-deep-black/60 font-body max-w-2xl mx-auto">
            Tips, tricks, and highlights from the clan. Stay updated with the latest in amateur sports.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
