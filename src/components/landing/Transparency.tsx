import React from 'react';

/**
 * The trust argument, made concrete. The ranking weights are shown as data
 * rather than as a code screenshot so they stay selectable, translatable, and
 * readable by crawlers — and so a reader can check them against the published
 * repository line by line.
 *
 * These mirror `RankingWeights::default()` in the ranking crate, which is the
 * source of truth. The repeat-creator term subtracts, so it is signed here
 * instead of being presented as another positive weight.
 */
const RANKING_TERMS = [
  { weight: '0.40', label: 'Stated interest', inactive: true },
  { weight: '0.30', label: 'Recency', inactive: false },
  { weight: '0.15', label: 'Connection signal', inactive: false },
  { weight: '0.10', label: 'Post quality', inactive: false },
  { weight: '-0.05', label: 'Repeat-creator penalty', inactive: false },
] as const;

export const Transparency: React.FC = () => (
  <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
    <div>
      <h3 className="text-base font-medium text-ink">Everything the ranking considers</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Discovery posts are scored by these five terms and nothing else. There is no watch-time
        input, no engagement-bait multiplier, and no hidden per-user tuning.
      </p>

      <dl className="mt-6 divide-y divide-line border-y border-line">
        {RANKING_TERMS.map(({ weight, label, inactive }) => (
          <div key={label} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-sm text-ink">
              {label}
              {inactive && (
                <span className="ml-2 text-[12px] font-medium uppercase tracking-[0.02em] text-ink-soft">
                  Not yet active
                </span>
              )}
            </dt>
            <dd className="font-mono text-sm tabular-nums text-accent-strong">{weight}</dd>
          </div>
        ))}
      </dl>

      {/* The interest term carries the largest weight and currently contributes
          nothing, because matching a post to a stated interest needs an embedding
          model the platform has not adopted yet. Publishing 0.40 without saying so
          would misstate how the feed actually orders itself. */}
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        Stated interest is not switched on yet — it needs a model Duet has not adopted, so it
        contributes nothing to ordering today. Until it does, ranking runs on the remaining four
        terms.
      </p>
    </div>

    <div>
      <h3 className="text-base font-medium text-ink">Where your words are held</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Messages are encrypted at rest. When the AI needs to read one, it is decrypted in memory
        for the length of that single operation and never written back out in plain text — not to
        a log, not to a cache, not to disk.
      </p>
      {/* Says only what is built. The dual-key model — half the key derived from the
          user's own passphrase — is designed but not implemented; today a single
          platform-held key does this work, and claiming otherwise on the page whose
          purpose is verifiability would be the worst place to overstate. */}
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        The key that unlocks your data is held by the platform and kept separately from the
        database it protects. Splitting that key so that half of it is derived from your own
        passphrase — meaning a breach of our infrastructure alone could not decrypt anything — is
        designed and not yet built. We will say so here when it ships.
      </p>
    </div>
  </div>
);
