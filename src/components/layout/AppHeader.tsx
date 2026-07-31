import React from 'react';
import Link from 'next/link';
import { DuetMark } from '@/components/brand/DuetMark';
import { Home, MessageCircle, Bell } from 'lucide-react';
import { logoutAction } from '@/app/actions/auth';

export const AppHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md hidden md:block">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-sm" aria-label="Duet home">
          <DuetMark className="h-6 w-6 text-accent" />
          <span className="text-lg font-semibold tracking-tight">Duet</span>
        </Link>
        
        <nav className="flex items-center gap-1">
          <Link href="/" aria-current="page" className="flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2 text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            <Home className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-ink-soft transition-colors cursor-not-allowed opacity-50" disabled>
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm font-medium">Messages</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-ink-soft transition-colors cursor-not-allowed opacity-50" disabled>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-sm font-medium">Notifications</span>
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-[12px] font-medium tracking-[0.02em] text-ink-soft ring-1 ring-line">
            JO
          </span>
          <form action={logoutAction}>
            <button type="submit" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded-sm">
              Log out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
