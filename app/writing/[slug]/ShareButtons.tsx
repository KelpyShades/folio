'use client';

import { useState } from 'react';
import { FaCheck, FaLink, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`"${title}" by @appiah_kelvin_`);

  const twitterShareUrl = `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div className="flex items-baseline gap-2.5 font-mono text-[10px] text-[#555] sm:text-xs">
      <span className="font-bold tracking-wider text-[#888] uppercase">Share:</span>
      <button
        onClick={handleCopy}
        type="button"
        className="inline-flex items-baseline gap-1 transition-colors hover:text-black"
        title="Copy link"
      >
        {copied ? (
          <>
            <FaCheck className="h-3 w-3 shrink-0 text-emerald-600" />
            <span className="font-bold text-emerald-600">Copied</span>
          </>
        ) : (
          <>
            <FaLink className="h-3 w-3 shrink-0" />
            <span>Copy</span>
          </>
        )}
      </button>

      <span className="text-[#bbb]">•</span>

      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline gap-1 transition-colors hover:text-black"
        title="Share on X"
      >
        <FaXTwitter className="h-3 w-3 shrink-0" />
        <span>Post</span>
      </a>

      <span className="text-[#bbb]">•</span>

      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline gap-1 transition-colors hover:text-black"
        title="Share on LinkedIn"
      >
        <FaLinkedin className="h-3 w-3 shrink-0" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
