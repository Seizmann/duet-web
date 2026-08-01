import React from 'react';
import Link from 'next/link';
import { DuetMark } from '@/components/brand/DuetMark';

/**
 * Sticky top bar. Deliberately holds a single action: at this stage of the
 * product there is nothing else worth competing with it for attention, and a
 * one-action bar is what lets the layout survive a 320px viewport without a
 * hamburger menu or an overflow hack.
 */
export const SiteHeader: React.FC = () => (
  <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
      <Link href="/" className="flex items-center gap-2.5 text-ink" aria-label="Duet home">
        <DuetMark className="h-6 w-6 text-accent" />
        <span className="text-lg font-semibold tracking-tight">Duet</span>
      </Link>

      {/* This bar only renders for signed-out visitors — a valid session gets the
          feed at `/` instead — so the single action is always "sign in". */}
      <Link
        href="/login"
        className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Sign in
      </Link>
    </div>
  </header>
);
