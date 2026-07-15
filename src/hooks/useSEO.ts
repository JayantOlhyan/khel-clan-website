import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: Record<string, any> | Record<string, any>[];
}

export function useSEO({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://khelclan.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | KhelClan`;
    document.title = fullTitle;

    // Helper to set meta tags
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('name=')) {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '');
        } else if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '');
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper to set link tags (Canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', 'content', description);

    // 3. Open Graph
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    if (canonicalUrl) {
      setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    }

    // 4. Twitter
    setMetaTag('meta[name="twitter:card"]', 'content', twitterCard);
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // 5. Canonical URL
    if (canonicalUrl) {
      setLinkTag('canonical', canonicalUrl);
    }

    // 6. Structured Data (JSON-LD)
    let scriptId = 'khelclan-structured-data';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    } else if (scriptElement) {
      // Remove if no structured data for this route
      scriptElement.remove();
    }

    // Cleanup function (optional, but good practice if routes change rapidly and we want default fallbacks)
    return () => {
      // We generally want to leave the tags so the next route overwrites them,
      // preventing a flash of un-styled meta. But structured data should be cleaned.
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, twitterCard, structuredData]);
}
