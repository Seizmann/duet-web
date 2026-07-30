import React from 'react';
import { FAQ_ENTRIES } from '@/components/landing/FAQ';

/**
 * JSON-LD for search and generative engines. Serialised on the server into a
 * single script tag, so it costs nothing at runtime and stays in lockstep with
 * the visible FAQ copy — the entries are imported, not duplicated.
 */
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://spritexai.pro.bd/#organization',
      name: 'SpritexAI',
      url: 'https://spritexai.pro.bd',
      founder: { '@type': 'Person', name: 'Mohammad Sijan', url: 'https://sijan.pro.bd' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Duet',
      url: 'https://duet.rexio.pro',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'Web',
      publisher: { '@id': 'https://spritexai.pro.bd/#organization' },
      description:
        'A private communication space for couples and close friends, with AI mediation that rewords heated messages, private vents that are never shared, and a published, verifiable feed ranking.',
      offers: [
        { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Pro', category: 'subscription' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ENTRIES.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export const StructuredData: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
  />
);
