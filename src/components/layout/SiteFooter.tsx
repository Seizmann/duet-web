import React from 'react';
import { DuetMark } from '@/components/brand/DuetMark';

export const SiteFooter: React.FC = () => (
  <footer className="border-t border-line bg-surface">
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <div className="max-w-sm">
        <div className="flex items-center gap-2.5 text-ink">
          <DuetMark className="h-5 w-5 text-accent" />
          <span className="font-semibold tracking-tight">Duet</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          A product of SpritexAI, built on the RexiO platform. Founded and engineered by
          Mohammad Sijan.
        </p>
      </div>

      {/* The "Verify it yourself" links lived here and pointed at an organisation
          page rather than the repositories themselves, which are not published yet.
          On the one part of the site whose whole argument is "go and check", a link
          that does not reach the code is worse than no link. Restore this block —
          with real repository URLs — when the ranking and messaging crates go
          public. */}

      <p className="mt-10 border-t border-line pt-6 text-xs text-ink-soft">
        © 2026 SpritexAI. Source-available components are licensed under PolyForm Noncommercial
        1.0.0.
      </p>
    </div>
  </footer>
);
