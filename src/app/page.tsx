import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { InteractiveDemo } from '@/components/landing/InteractiveDemo';
import { TransparencySection } from '@/components/landing/TransparencySection';
import { FeatureCard } from '@/components/features/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0F172A] text-gray-900 dark:text-slate-100 selection:bg-[#06A8A8]/20 transition-colors">
      <Header />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Interactive AI Mediation Live Demo */}
        <InteractiveDemo />

        {/* 3. Core Product Features */}
        <section className="max-w-5xl mx-auto my-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            <FeatureCard
              icon="reactions"
              title="Authentic Expressions"
              description="No standard emojis or toxic engagement loops. High-contrast vector reactions built for honest feedback."
            />
            <FeatureCard
              icon="vent"
              title="Confidential AI Venting"
              description="Talk through misunderstandings with AI first. Express frustrations safely in isolated, encrypted confessionals."
            />
            <FeatureCard
              icon="privacy"
              title="Verifiable Open-Source Trust"
              description="Transparent 2-tier feed ranking with no hidden algorithms or time-spent manipulation."
            />
          </div>
        </section>

        {/* 4. Algorithmic Transparency & Security */}
        <TransparencySection />
      </main>

      <footer className="py-10 border-t border-gray-200 dark:border-slate-800 text-center text-xs text-gray-500 dark:text-slate-500 bg-[#F8FAFB] dark:bg-[#0F172A]">
        <p>© 2026 SpritexAI. Built with RexiO Duet Architecture. Founder & Lead Engineer Mohammad Sijan.</p>
      </footer>
    </div>
  );
}
