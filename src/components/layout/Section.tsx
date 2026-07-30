import React from 'react';

/**
 * Shared shell for every landing section: consistent gutters, max width, and a
 * numbered eyebrow that gives the page a spine to read down. Keeping the
 * rhythm here rather than in each section is what stops the spacing drifting
 * as sections get added.
 *
 * `title` is the real h2 — it carries the semantic heading and the numbered
 * label above it is presentational only, so screen readers and search crawlers
 * see a clean h1 → h2 → h3 outline.
 */
export const Section: React.FC<{
  id?: string;
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, index, label, title, children }) => (
  <section id={id} className="border-t border-line">
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <p aria-hidden="true" className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
          <span className="text-accent-strong">{index}</span> — {label}
        </p>
        <h2 className="mt-5 text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
          {title}
        </h2>
      </header>
      <div className="mt-10 sm:mt-12">{children}</div>
    </div>
  </section>
);
