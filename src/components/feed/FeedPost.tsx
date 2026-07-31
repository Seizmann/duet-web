'use client';
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface FeedPostProps {
  post: {
    id: string;
    authorName: string;
    content: string;
    timestamp: string;
    reactions: { up: number; down: number };
  };
  /** Stagger position in the feed — drives the entry delay on `settle`. */
  index?: number;
}

export const FeedPost: React.FC<FeedPostProps> = ({ post, index = 0 }) => {
  const [reacted, setReacted] = useState<'up' | 'down' | null>(null);

  const handleReaction = (type: 'up' | 'down') => {
    // TODO: wire to real feed endpoint
    setReacted(reacted === type ? null : type);
  };

  // Optimistic count: the server number plus this session's own vote.
  const count = (type: 'up' | 'down') => post.reactions[type] + (reacted === type ? 1 : 0);

  const reactionClass = (type: 'up' | 'down', active: string) =>
    `inline-flex items-center gap-2 h-11 sm:h-10 px-3 rounded-lg text-[14px] font-medium tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      reacted === type ? active : 'text-ink-soft hover:bg-canvas hover:text-ink'
    }`;

  return (
    <article
      style={{ '--i': index } as React.CSSProperties}
      className="settle group relative overflow-hidden rounded-xl border border-line bg-surface shadow-elevate transition-shadow hover:shadow-elevate-hover"
    >
      {/* The through-line motif from the hero, carried into the feed: a seam
          down the side of every card that warms to full accent on hover. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[3px] bg-line transition-colors group-hover:bg-accent"
      />

      <div className="p-6 pl-7 sm:p-8 sm:pl-9">
        <p className="text-[12px] font-medium uppercase tracking-[0.02em] text-ink-soft">
          {post.timestamp}
        </p>

        {/* The message is the subject of the card, so it gets display-grade
            setting: optical size bumped, tracking eased in to match. */}
        <p className="mt-4 max-w-[65ch] text-[18px] leading-[1.6] tracking-[-0.01em] text-ink [font-variation-settings:'opsz'_20]">
          {post.content}
        </p>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-4">
          <div className="flex items-center gap-3">
            {/* Monogram, not a stock avatar glyph — two people know each other
                by name here, so initials carry more than a generic silhouette. */}
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-[12px] font-medium tracking-[0.02em] text-ink-soft ring-1 ring-line"
            >
              {post.authorName.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-[14px] font-medium text-ink">{post.authorName}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handleReaction('up')}
              aria-pressed={reacted === 'up'}
              className={reactionClass('up', 'bg-accent/10 text-accent')}
            >
              <ThumbsUp
                className={`h-5 w-5 ${reacted === 'up' ? 'fill-accent/25' : ''}`}
                strokeWidth={1.5}
              />
              {count('up') > 0 && count('up')}
              <span className="sr-only">Acknowledge</span>
            </button>

            <button
              onClick={() => handleReaction('down')}
              aria-pressed={reacted === 'down'}
              className={reactionClass('down', 'bg-ink/8 text-ink')}
            >
              <ThumbsDown
                className={`h-5 w-5 ${reacted === 'down' ? 'fill-ink/20' : ''}`}
                strokeWidth={1.5}
              />
              {count('down') > 0 && count('down')}
              <span className="sr-only">Needs discussion</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
