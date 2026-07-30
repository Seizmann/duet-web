import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto pt-16 pb-12 px-4 flex flex-col items-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06A8A8]/10 text-[#06A8A8] text-xs font-semibold uppercase tracking-wider mb-8 border border-[#06A8A8]/20 shadow-sm">
        <Sparkles className="w-4 h-4" />
        <span>SpritexAI Relationship Conductor</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.15] mb-6">
        Prevent Relationships From Breaking Over{' '}
        <span className="bg-gradient-to-r from-[#06A8A8] via-[#0891B2] to-teal-400 bg-clip-text text-transparent">
          Preventable Miscommunication
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
        A private, high-trust space for couples and close friend circles. Combine private messaging, a non-manipulative feed, and intelligent AI mediation to resolve friction gracefully.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#06A8A8] hover:bg-[#0891B2] text-white font-semibold flex items-center justify-center gap-2.5 shadow-xl shadow-[#06A8A8]/25 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <span>Start Harmony Journey</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-gray-800 dark:text-slate-200 font-semibold border border-gray-200 dark:border-slate-700 transition-all">
          Read Transparency Blueprint
        </button>
      </div>

      {/* Trust Highlights */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-xs font-medium text-gray-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#06A8A8]" />
          <span>Zero-Manipulative Feed</span>
        </div>
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-4 h-4 text-[#06A8A8]" />
          <span>Private Confessional Venting</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#06A8A8]" />
          <span>Open-Source PolyForm Engine</span>
        </div>
      </div>
    </section>
  );
};
