// src/pages/BlogDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ChevronLeft } from 'lucide-react';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted-green">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-brand-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Hero Header */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-deep-black/40 flex items-end">
          <div className="max-w-4xl mx-auto px-4 w-full pb-12">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition">
              <ChevronLeft size={20} className="mr-1" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center space-x-4 mb-8 text-deep-black/60 font-body">
          <span className="font-semibold">{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        
        <div className="prose prose-lg max-w-none text-deep-black/80 font-body leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 italic text-deep-black/50">
          Want to experience the game yourself? <Link to="/games" className="text-brand-primary font-bold hover:underline">Browse available slots</Link> and join the clan today.
        </div>
      </div>
    </div>
  );
}
