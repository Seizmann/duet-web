import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Plus, Bell, LogOut } from 'lucide-react';
import { logoutAction } from '@/app/actions/auth';

const inactive =
  'flex h-12 w-12 items-center justify-center rounded-lg text-ink-soft transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

export const MobileNav: React.FC = () => {
  return (
    // Floating rather than edge-to-edge: the feed scrolls under it, so the bar
    // reads as a control that sits above the content instead of cropping it.
    // Solid surface, no backdrop blur — DESIGN.md §9.4 bans glassmorphism.
    <nav className="fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto flex max-w-sm items-center justify-between gap-1 rounded-xl bg-surface p-2 shadow-elevate-hover ring-1 ring-line">
        <Link
          href="/"
          aria-current="page"
          className={`${inactive} bg-accent/10 text-accent`}
        >
          <Home className="h-6 w-6" strokeWidth={1.5} />
          <span className="sr-only">Home</span>
        </Link>

        <button className={`${inactive} cursor-not-allowed opacity-40`} disabled>
          <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
          <span className="sr-only">Messages</span>
        </button>

        {/* The one primary action on this screen, per DESIGN.md §5.1. */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          disabled
        >
          <Plus className="h-6 w-6" strokeWidth={2} />
          <span className="sr-only">Say something</span>
        </button>

        <button className={`${inactive} cursor-not-allowed opacity-40`} disabled>
          <Bell className="h-6 w-6" strokeWidth={1.5} />
          <span className="sr-only">Notifications</span>
        </button>

        <form action={logoutAction}>
          <button type="submit" className={`${inactive} hover:text-ink`}>
            <LogOut className="h-6 w-6" strokeWidth={1.5} />
            <span className="sr-only">Log out</span>
          </button>
        </form>
      </div>
    </nav>
  );
};
