import React from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { MobileNav } from '@/components/layout/MobileNav';
import { FeedPost } from './FeedPost';

const MOCK_POSTS = [
  {
    id: '1',
    authorName: 'Alex',
    content: "I feel completely exhausted when I have to repeat the same thing over and over. It makes me feel like I'm not being heard at all.",
    timestamp: '2 hours ago',
    reactions: { up: 2, down: 0 }
  },
  {
    id: '2',
    authorName: 'Jordan',
    content: "Sometimes I just need 15 minutes of quiet when I get home before we start discussing dinner or chores. It's not about avoiding you, it's about resetting my brain.",
    timestamp: '5 hours ago',
    reactions: { up: 1, down: 0 }
  },
  {
    id: '3',
    authorName: 'Alex',
    content: "I appreciate it so much when you make coffee in the morning without me asking. It sets a really good tone for my whole day.",
    timestamp: 'Yesterday',
    reactions: { up: 4, down: 0 }
  }
];

export const FeedScreen = () => {
  return (
    <div className="min-h-screen bg-canvas flex flex-col">
      <AppHeader />
      
      <main className="flex-1 w-full max-w-[680px] mx-auto px-4 sm:px-6 py-6 md:py-8 pb-24 md:pb-8">
        <header className="settle mb-8 border-l-2 border-accent pl-5">
          <h1 className="text-[24px] sm:text-[28px] font-semibold tracking-tight text-ink">
            Shared Space
          </h1>
          <p className="mt-1 text-ink-soft">Thoughts and reflections, mediated for clarity.</p>
        </header>

        <div className="flex flex-col gap-6">
          {MOCK_POSTS.map((post, i) => (
            <FeedPost key={post.id} post={post} index={i + 1} />
          ))}
        </div>
      </main>

      <MobileNav />
    </div>
  );
};
