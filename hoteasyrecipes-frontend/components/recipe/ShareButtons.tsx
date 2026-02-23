'use client';

import { useState } from 'react';
import { Share2, Copy, Facebook, Twitter, Pinterest, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-stone-600 font-medium">Share:</span>

      {/* Social Share Buttons */}
      <div className="flex space-x-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={shareLinks.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          aria-label="Share on Pinterest"
        >
          <Pinterest className="h-4 w-4" />
        </a>
      </div>

      {/* Copy Link Button */}
      <button
        onClick={copyToClipboard}
        className={`p-2 rounded-full transition-colors ${
          copied
            ? 'bg-green-100 text-green-600'
            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
        }`}
        aria-label="Copy link"
      >
        {copied ? <Copy className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>

      {/* Native Share Button (if supported) */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <button
          onClick={() => navigator.share({ title, url: currentUrl })}
          className="p-2 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-200 transition-colors"
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
