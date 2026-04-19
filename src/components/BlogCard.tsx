// src/components/BlogCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/blogPosts';

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
      <div className="overflow-hidden h-48">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-black text-brand-forest mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-brand-forest font-bold hover:text-brand-lime transition flex items-center"
        >
          Read more <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}
