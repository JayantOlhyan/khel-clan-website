// src/components/BlogCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/blogPosts';

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 animate-fadeIn">
      <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-heading font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-deep-black/70 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-brand-primary font-body hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
