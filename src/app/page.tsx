import { cookies } from 'next/headers';
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

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const hasSession = cookieStore.has('duet_session');
  
  if (hasSession) {
    return {
      title: 'Feed · Duet',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  return {};
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
  const cookieStore = await cookies();
  const duetSession = cookieStore.get('duet_session')?.value;
  let isValidSession = false;

  if (duetSession) {
    try {
      const csrf = cookieStore.get('csrf_token')?.value;
      const cookieStr = `duet_session=${duetSession}; csrf_token=${csrf || ''}`;
      const res = await callGateway('a3', {}, cookieStr);
      isValidSession = res.ok;
    } catch {
      isValidSession = false;
    }
  }

  if (isValidSession) {
    return <FeedScreen />;
  }
  
  return <LandingView />;
}
