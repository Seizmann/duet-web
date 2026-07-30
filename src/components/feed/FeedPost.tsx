'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ThumbsUp, ThumbsDown, User } from 'lucide-react';

interface FeedPostProps {
  post: {
    id: string;
    authorName: string;
    content: string;
    timestamp: string;
    reactions: { up: number; down: number };
  }
}

export const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const [reacted, setReacted] = useState<'up' | 'down' | null>(null);

  const handleReaction = (type: 'up' | 'down') => {
    // TODO: wire to real feed endpoint
    setReacted(reacted === type ? null : type);
  };

  return (
    <Card className="flex flex-col p-6 sm:p-8">
      {/* Top: Timestamp */}
      <span className="text-[12px] font-medium tracking-[0.02em] text-ink-soft uppercase">
        {post.timestamp}
      </span>

      {/* Body: The message */}
      <p className="mt-4 mb-8 text-[18px] leading-[1.6] text-ink max-w-[65ch]">
        {post.content}
      </p>

      {/* Footer: Author and Reactions */}
      <div className="flex items-center justify-between pt-4 border-t border-line">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-canvas border border-line flex items-center justify-center overflow-hidden">
            <User className="h-4 w-4 text-ink-soft" strokeWidth={1.5} />
          </div>
          <span className="text-[14px] font-medium text-ink">
            {post.authorName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleReaction('up')}
            className={`flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent ${
              reacted === 'up' ? 'bg-accent/10 text-accent' : 'text-ink-soft hover:bg-surface hover:text-ink'
            }`}
            aria-label="Acknowledge"
          >
            <ThumbsUp className={`h-5 w-5 ${reacted === 'up' ? 'fill-accent' : ''}`} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={() => handleReaction('down')}
            className={`flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-lg transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent ${
              reacted === 'down' ? 'bg-red-500/10 text-red-500' : 'text-ink-soft hover:bg-surface hover:text-ink'
            }`}
            aria-label="Needs discussion"
          >
            <ThumbsDown className={`h-5 w-5 ${reacted === 'down' ? 'fill-red-500' : ''}`} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </Card>
  );
};
