import React from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { MobileNav } from '@/components/layout/MobileNav';
import { FeedPost, type Post } from './FeedPost';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    authorName: 'Alex',
    isMine: false,
    content:
      "I feel completely exhausted when I have to repeat the same thing over and over. It makes me feel like I'm not being heard at all.",
    timestamp: '2 hours ago',
    shift: 'Blame removed, need kept',
    reactions: { up: 2, down: 0 },
  },
  {
    id: '2',
    authorName: 'Jordan',
    isMine: true,
    content:
      "Sometimes I just need 15 minutes of quiet when I get home before we start discussing dinner or chores. It's not about avoiding you, it's about resetting my brain.",
    timestamp: '5 hours ago',
    shift: 'Defensiveness softened',
    reactions: { up: 1, down: 0 },
  },
  {
    id: '3',
    authorName: 'Alex',
    isMine: false,
    content:
      'I appreciate it so much when you make coffee in the morning without me asking. It sets a really good tone for my whole day.',
    timestamp: 'Yesterday',
    shift: 'Delivered as written',
    reactions: { up: 4, down: 0 },
  },
];

export const FeedScreen = () => {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <AppHeader />

      <main className="mx-auto w-full max-w-[680px] flex-1 px-4 pb-32 pt-6 sm:px-6 md:pb-16 md:pt-10">
        <header className="settle mb-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-accent-strong">
            Alex and Jordan
          </p>
          <h1 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[36px]">
            Shared space
          </h1>
          <p className="mt-2 max-w-[55ch] text-ink-soft">
            Everything here was mediated before it arrived. Nothing either of you typed in private
            is stored or shown.
          </p>
        </header>

        <div className="flex flex-col gap-5">
          {MOCK_POSTS.map((post, i) => (
            <FeedPost key={post.id} post={post} index={i + 1} />
          ))}
        </div>

        <p className="settle mt-12 text-center text-[14px] text-ink-soft" style={{ '--i': 4 } as React.CSSProperties}>
          That is everything from the last few days.
        </p>
      </main>

      <MobileNav />
    </div>
  );
};
