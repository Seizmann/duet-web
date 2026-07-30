import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero. Left-aligned and anchored to a vertical accent rule — the "through
 * line" motif that recurs in the mediation section below, where it becomes the
 * seam between the two people. Type is solid rather than gradient-filled so the
 * headline stays legible at every size and in both themes.
 */
export const Hero: React.FC = () => (
  <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
    <div className="border-l-2 border-accent pl-5 sm:pl-8">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-strong">
        A SpritexAI product
      </p>

      <h1 className="mt-5 max-w-2xl text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
        Two people. One conversation that keeps going wrong.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
        Duet is a private space for couples and close friends, with an AI that mediates instead of
        amplifies. Say the hard thing to the AI first — it works out how to say it in a way the
        other person can actually hear.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <a
          href="/app"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Start with Duet
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#transparency"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-1 py-3.5 text-sm font-medium text-ink transition-colors hover:text-accent-strong sm:px-0"
        >
          Read how it works
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);
