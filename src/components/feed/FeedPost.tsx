'use client';
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, ShieldCheck, ChevronDown } from 'lucide-react';

export interface Post {
  id: string;
  authorName: string;
  /** Whose voice this is. Drives which side of the page the post is anchored to. */
  isMine: boolean;
  content: string;
  timestamp: string;
  /** What the mediator changed on the way through. Never the raw text. */
  shift: string;
  reactions: { up: number; down: number };
}

export const FeedPost: React.FC<{ post: Post; index?: number }> = ({ post, index = 0 }) => {
  const [reacted, setReacted] = useState<'up' | 'down' | null>(null);
  const [openNote, setOpenNote] = useState(false);

  const count = (type: 'up' | 'down') => post.reactions[type] + (reacted === type ? 1 : 0);

  const react = (type: 'up' | 'down') => setReacted(reacted === type ? null : type);

  const reactionClass = (type: 'up' | 'down', active: string) =>
    `inline-flex h-11 items-center gap-2 rounded-lg px-3 text-[14px] font-medium tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-10 ${
      reacted === type ? active : 'text-ink-soft hover:bg-canvas hover:text-ink'
    }`;

  return (
    <article
      style={{ '--i': index } as React.CSSProperties}
      className={`settle group relative rounded-xl bg-surface shadow-elevate ring-1 ring-line transition-shadow hover:shadow-elevate-hover ${
        post.isMine ? 'sm:ml-10' : 'sm:mr-10'
      }`}
    >
      {/* The seam. It is the landing page's two-lane motif turned on its side:
          left edge for the other person, right edge for you, so a glance down
          the feed reads as a conversation alternating between two voices. */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-4 w-[3px] rounded-full transition-colors ${
          post.isMine
            ? 'right-0 bg-line group-hover:bg-ink-soft'
            : 'left-0 bg-accent/40 group-hover:bg-accent'
        }`}
      />

      <div className="p-6 sm:p-8">
        <header
          className={`flex items-center gap-3 ${post.isMine ? 'flex-row-reverse text-right' : ''}`}
        >
          {/* Initials, not a stock silhouette — two people who know each other
              by name get more from "AL" than a generic person glyph. */}
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-canvas text-[12px] font-medium tracking-[0.02em] text-ink-soft ring-1 ring-line"
          >
            {post.authorName.slice(0, 2).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-medium text-ink">
              {post.isMine ? 'You' : post.authorName}
            </p>
            <p className="text-[12px] font-medium uppercase tracking-[0.02em] text-ink-soft">
              {post.timestamp}
            </p>
          </div>
        </header>

        {/* The message is the subject of this card the way a photo is the
            subject of a photo card — so it is set at display weight, not as
            body copy wrapped in chrome. */}
        <p className="mt-6 max-w-[65ch] text-[20px] leading-[1.5] tracking-[-0.01em] text-ink [font-variation-settings:'opsz'_24] sm:text-[24px]">
          {post.content}
        </p>

        {/* Mediation disclosure. The raw text is never shown — the product
            forbids it — so what opens here is what the mediator *changed*. */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setOpenNote(!openNote)}
            aria-expanded={openNote}
            className="inline-flex h-11 items-center gap-2 rounded-lg pr-3 text-[14px] font-medium text-ink-soft transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:h-9"
          >
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {post.shift}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openNote ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </button>

          {/* grid-rows 0fr→1fr animates to the content's natural height, which
              plain max-height cannot do without guessing a magic number. */}
          <div
            className={`grid transition-[grid-template-rows] ${openNote ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <p className="mt-2 max-w-[60ch] border-l-2 border-line pl-4 text-[14px] leading-[1.5] text-ink-soft">
                Duet rewrote this before it was delivered. What was originally typed stays private
                — it is never shown, quoted, or referenced.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-1 border-t border-line pt-4">
          <button
            onClick={() => react('up')}
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
            onClick={() => react('down')}
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
    </article>
  );
};
