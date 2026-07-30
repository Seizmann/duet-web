import React from 'react';
import { DuetMark } from '@/components/brand/DuetMark';

const REPOSITORIES = [
  { label: 'Feed ranking source', href: 'https://github.com/spritex' },
  { label: 'Messaging core source', href: 'https://github.com/spritex' },
];

export const SiteFooter: React.FC = () => (
  <footer className="border-t border-line bg-surface">
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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

        <nav aria-label="Source code">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
            Verify it yourself
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {REPOSITORIES.map((repo) => (
              <li key={repo.label}>
                <a
                  href={repo.href}
                  className="text-ink transition-colors hover:text-accent-strong"
                  rel="noopener"
                >
                  {repo.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mt-10 border-t border-line pt-6 text-xs text-ink-soft">
        © 2026 SpritexAI. Source-available components are licensed under PolyForm Noncommercial
        1.0.0.
      </p>
    </div>
  </footer>
);
