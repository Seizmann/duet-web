'use client';

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

type Sample = {
  /** BCP-47 tag for the pair — drives both the lang attribute and the font stack. */
  lang: 'bn' | 'en';
  said: string;
  heard: string;
  shift: string;
};

const SAMPLES: readonly Sample[] = [
  {
    lang: 'bn',
    said: 'তুমি সবসময় আমাকে ইগনোর করো! তোমার কাছে অন্য সবকিছুর ইম্পর্টেন্স বেশি, আমার না!',
    heard:
      'আমি জানি তুমি ব্যস্ত থাকো, কিন্তু ইদানিং মনে হচ্ছে আমরা আগের মতো সময় কাটাতে পারছি না। একটু কথা বললে ভালো লাগতো।',
    shift: 'Blame removed, need kept',
  },
  {
    lang: 'en',
    said: 'Why do you never listen when I talk about my day? It feels like you do not care at all.',
    heard:
      'I feel disconnected when we do not share how our days went. Could we take ten minutes tonight to catch up?',
    shift: 'Accusation to request',
  },
] as const;

/**
 * The mediation preview, and the visual core of the page: two lanes for two
 * people, separated by the same accent rule the hero introduced. The lanes are
 * side by side from `md` up and stack on narrow screens, where the rule flips
 * from a vertical seam to a horizontal one.
 *
 * The switch is driven by remounting the text on a key rather than a timer, so
 * the reveal animation replays without a loading state and there is no spinner
 * anywhere. Both lanes reserve their height up front, which keeps CLS at zero
 * when a longer sample rotates in.
 */
export const MediationLanes: React.FC = () => {
  const [index, setIndex] = useState(0);
  const sample = SAMPLES[index];
  const script = sample.lang === 'bn' ? 'font-bengali' : '';

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
        {/* Lane X — what the person actually feels, seen by nobody else. */}
        <article className="pb-8 md:pb-0 md:pr-10">
          <header className="flex items-baseline justify-between gap-3">
            <h3 className="text-sm font-medium text-ink">What X types</h3>
            <span className="text-xs text-ink-soft">Private</span>
          </header>
          <p
            key={`said-${index}`}
            lang={sample.lang}
            className={`rise mt-4 min-h-[7.5rem] text-base leading-relaxed text-ink-soft sm:min-h-[6.5rem] ${script}`}
          >
            {sample.said}
          </p>
        </article>

        {/* The seam: horizontal when stacked, vertical when side by side. */}
        <div
          aria-hidden="true"
          className="relative h-px w-full bg-line md:h-full md:w-px"
        >
          <span className="breathe absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </div>

        {/* Lane Y — what the AI decided the other person should receive. */}
        <article className="pt-8 md:pl-10 md:pt-0">
          <header className="flex items-baseline justify-between gap-3">
            <h3 className="text-sm font-medium text-ink">What Y receives</h3>
            <span className="text-xs text-accent-strong">{sample.shift}</span>
          </header>
          <p
            key={`heard-${index}`}
            lang={sample.lang}
            className={`rise mt-4 min-h-[7.5rem] text-base leading-relaxed text-ink sm:min-h-[6.5rem] ${script}`}
          >
            {sample.heard}
          </p>
        </article>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
        <button
          type="button"
          onClick={() => setIndex((current) => (current + 1) % SAMPLES.length)}
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Another example
        </button>
        <p className="text-xs text-ink-soft">
          The raw text on the left is never delivered, quoted, or referenced. Y only ever sees the
          right-hand message.
        </p>
      </div>
    </div>
  );
};
