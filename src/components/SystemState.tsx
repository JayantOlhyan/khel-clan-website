import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SystemStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  secondaryActionText?: string;
  secondaryActionLink?: string;
  iconColor?: string;
  isFullPage?: boolean;
}

export default function SystemState({
  icon: Icon,
  title,
  description,
  actionText,
  actionLink,
  secondaryActionText,
  secondaryActionLink,
  iconColor = "text-brand-forest",
  isFullPage = false
}: SystemStateProps) {
  const content = (
    <div className="text-center max-w-md mx-auto px-4">
      <div className="bg-white inline-flex p-6 rounded-full shadow-sm border border-black/5 mb-6">
        <Icon size={48} className={iconColor} />
      </div>
      <h1 className="text-3xl font-heading font-black text-brand-forest mb-4">{title}</h1>
      <p className="text-gray-600 mb-8 font-body text-lg leading-relaxed">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {actionText && actionLink && (
          <Link to={actionLink} className="bg-brand-forest text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-flame transition shadow-sm">
            {actionText}
          </Link>
        )}
        {secondaryActionText && secondaryActionLink && (
          <Link to={secondaryActionLink} className="bg-white border text-gray-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition shadow-sm">
            {secondaryActionText}
          </Link>
        )}
      </div>
    </div>
  );

  if (isFullPage) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-brand-neutral pt-20">
        {content}
      </div>
    );
  }

  return <div className="py-24">{content}</div>;
}
