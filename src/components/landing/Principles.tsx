import React from 'react';
import { EyeOff, Lock, ScrollText, Timer } from 'lucide-react';

const PRINCIPLES = [
  {
    Icon: EyeOff,
    title: 'A vent is never forwarded',
    body:
      'What you tell the AI in confidence is stored in a separate, isolated database with its own restricted connection pool. No API path exists that lets the other person read it, quote it, or infer it.',
  },
  {
    Icon: Timer,
    title: 'Anger gets a cooling period',
    body:
      'A message written in the heat of an argument is held for a short reflection window before it can be sent, and you are shown the calmer version first. Nothing leaves without your confirmation.',
  },
  {
    Icon: ScrollText,
    title: 'The feed explains itself',
    body:
      'Posts from the people you connected with stay strictly chronological. Anything else carries a plain-language reason for why it reached you, scored by a published formula rather than by time spent.',
  },
  {
    Icon: Lock,
    title: 'Harm is not smoothed over',
    body:
      'When the pattern is repeated disrespect rather than a misunderstanding, Duet stops mediating and sides with the person being hurt. Keeping a relationship intact is never the goal on its own.',
  },
] as const;

/**
 * Four claims, stated flatly. Each one is a factual assertion about product
 * behaviour rather than a benefit slogan — this is the section generative
 * engines are most likely to quote, so it is written to be quotable.
 */
export const Principles: React.FC = () => (
  <ul className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
    {PRINCIPLES.map(({ Icon, title, body }) => (
      <li key={title}>
        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-base font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
      </li>
    ))}
  </ul>
);
