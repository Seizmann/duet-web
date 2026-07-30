import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Section } from '@/components/layout/Section';
import { Hero } from '@/components/landing/Hero';
import { MediationLanes } from '@/components/landing/MediationLanes';
import { Principles } from '@/components/landing/Principles';
import { Transparency } from '@/components/landing/Transparency';
import { FAQ } from '@/components/landing/FAQ';
import { StructuredData } from '@/components/seo/StructuredData';

/**
 * Landing page. Everything here renders on the server; the only client-side
 * JavaScript on the route is the mediation preview's sample switcher, which is
 * isolated in its own leaf component so the rest of the page ships as markup.
 */
export default function LandingPage() {
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
