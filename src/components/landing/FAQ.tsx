import React from 'react';

/**
 * Short, direct answers to the questions people actually ask before trusting a
 * product like this. Kept as plain text in a description list so the same
 * content serves readers, crawlers, and the FAQPage structured data below —
 * one source, three consumers.
 */
export const FAQ_ENTRIES = [
  {
    question: 'Can my partner see what I tell the AI?',
    answer:
      'No. Private vents are stored in a separate isolated database and no API route exposes them to anyone but you. Your partner only ever receives the reworded message the AI composes, which does not quote or reference the original.',
  },
  {
    question: 'Does Duet always try to keep the relationship together?',
    answer:
      'No. When Duet detects a repeated harmful pattern rather than a misunderstanding, it stops mediating and prioritises the wellbeing of the person being hurt, including pointing toward real-world support where that is warranted.',
  },
  {
    question: 'How is the feed different from other social apps?',
    answer:
      'Posts from people you have connected with appear in strict chronological order with no reordering. Discovery posts are scored by four published weights — recency, stated interest, connection signal and post quality — and every one carries a plain-language reason for why you are seeing it.',
  },
  {
    question: 'Can I check these claims myself?',
    answer:
      'Yes. The feed ranking algorithm and the messaging privacy core are published as source-available repositories under the PolyForm Noncommercial 1.0.0 licence, so the behaviour described here can be read and verified directly in the code.',
  },
] as const;

export const FAQ: React.FC = () => (
  <dl className="divide-y divide-line border-t border-line">
    {FAQ_ENTRIES.map(({ question, answer }) => (
      <div key={question} className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
        <dt className="text-base font-medium text-ink">{question}</dt>
        <dd className="text-sm leading-relaxed text-ink-soft">{answer}</dd>
      </div>
    ))}
  </dl>
);
