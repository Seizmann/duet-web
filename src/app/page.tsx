import { cookies } from 'next/headers';
import { cache } from 'react';
import type { Metadata } from 'next';
import { callGateway } from '@/lib/gateway';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Section } from '@/components/layout/Section';
import { Hero } from '@/components/landing/Hero';
import { MediationLanes } from '@/components/landing/MediationLanes';
import { Principles } from '@/components/landing/Principles';
import { Transparency } from '@/components/landing/Transparency';
import { FAQ } from '@/components/landing/FAQ';
import { StructuredData } from '@/components/seo/StructuredData';
import { FeedScreen } from '@/components/feed/FeedScreen';

// Cookie presence is not a session: an expired or forged token still sets one. Both the
// metadata and the body must agree on the *verified* answer, so they share this one call
// — `cache` dedupes it across the render pass.
const hasValidSession = cache(async (): Promise<boolean> => {
  const cookieStore = await cookies();
  const duetSession = cookieStore.get('duet_session')?.value;
  if (!duetSession) return false;

  try {
    const csrf = cookieStore.get('csrf_token')?.value;
    const res = await callGateway('a3', {}, `duet_session=${duetSession}; csrf_token=${csrf || ''}`);
    return res.ok;
  } catch {
    return false;
  }
});

export async function generateMetadata(): Promise<Metadata> {
  if (!(await hasValidSession())) return {};

  return {
    title: 'Feed · Duet',
    robots: {
      index: false,
      follow: false,
    },
  };
}

function LandingView() {
  return (
    <>
      <StructuredData />
      <SiteHeader />

      <main id="main">
        <Hero />

        <Section
          id="mediation"
          index="01"
          label="The mediation"
          title="The same feeling, said in a way it can actually land."
        >
          <MediationLanes />
        </Section>

        <Section
          id="principles"
          index="02"
          label="What Duet will and will not do"
          title="Four commitments the product is built around."
        >
          <Principles />
        </Section>

        <Section
          id="transparency"
          index="03"
          label="Transparency"
          title="You do not have to take our word for any of this."
        >
          <Transparency />
        </Section>

        <Section id="faq" index="04" label="Questions" title="Answered plainly.">
          <FAQ />
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}

export default async function RootPage() {
  return (await hasValidSession()) ? <FeedScreen /> : <LandingView />;
}
