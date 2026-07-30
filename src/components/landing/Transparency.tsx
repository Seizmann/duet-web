import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const RANKING_TERMS = [
  { weight: '0.30', label: 'Recency' },
  { weight: '0.40', label: 'Stated interest' },
  { weight: '0.15', label: 'Connection signal' },
  { weight: '0.15', label: 'Post quality' },
] as const;

/**
 * The trust argument, made concrete. The ranking weights are shown as data
 * rather than as a code screenshot so they stay selectable, translatable, and
 * readable by crawlers — and so a reader can check them against the published
 * repository line by line.
 */
export const Transparency: React.FC = () => (
  <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
    <div>
      <h3 className="text-base font-medium text-ink">Everything the ranking considers</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Discovery posts are scored by these four terms and nothing else. There is no watch-time
        input, no engagement-bait multiplier, and no hidden per-user tuning.
      </p>

      <dl className="mt-6 divide-y divide-line border-y border-line">
        {RANKING_TERMS.map(({ weight, label }) => (
          <div key={label} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-sm text-ink">{label}</dt>
            <dd className="font-mono text-sm tabular-nums text-accent-strong">{weight}</dd>
          </div>
        ))}
      </dl>

      <a
        href="https://github.com/spritex"
        rel="noopener"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-strong"
      >
        Read the ranking source
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>

    <div>
      <h3 className="text-base font-medium text-ink">Where your words are held</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Messages are encrypted at rest. When the AI needs to read one, it is decrypted in memory
        for the length of that single operation and never written back out in plain text — not to
        a log, not to a cache, not to disk.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        The key that unlocks your data is derived partly from your own passphrase and partly from a
        platform key held separately. Neither half is sufficient alone, so a breach of our
        infrastructure does not hand anyone your conversations.
      </p>

      <a
        href="https://github.com/spritex"
        rel="noopener"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-strong"
      >
        Read the messaging core source
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  </div>
);
