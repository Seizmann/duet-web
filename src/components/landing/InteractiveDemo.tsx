'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

const DEMO_SAMPLES = [
  {
    raw: "তুমি সবসময় আমাকে ইগনোর করো! তোমার কাছে অন্য সবকিছুর ইম্পর্টেন্স বেশি, আমার না!",
    mediated: "আমি জানি তুমি ব্যস্ত থাকো, কিন্তু ইদানিং আমার মনে হচ্ছে আমরা আগের মতো সময় কাটাতে পারছি না। একটু কথা বললে খুব ভালো লাগতো।",
    tone: "Calm & Constructive",
  },
  {
    raw: "Why do you never listen to me when I talk about my day? It feels like you don't care at all!",
    mediated: "I feel a bit disconnected when we don't share details about our day. Can we take 10 minutes tonight just to talk?",
    tone: "Empathetic & Clear",
  },
];

export const InteractiveDemo: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isTransforming, setIsTransforming] = useState(false);

  const handleNext = () => {
    setIsTransforming(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % DEMO_SAMPLES.length);
      setIsTransforming(false);
    }, 400);
  };

  const sample = DEMO_SAMPLES[index];

  return (
    <section className="w-full max-w-4xl mx-auto my-16 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06A8A8]/10 text-[#06A8A8] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#06A8A8]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive AI Mediation Preview</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          See How Duet Transforms Friction into Harmony
        </h2>
      </div>

      <div className="p-6 md:p-8 rounded-3xl bg-[#F8FAFB] dark:bg-[#1E293B] border border-gray-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Raw Venting Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-rose-500/20 shadow-sm relative">
            <span className="text-xs font-medium uppercase tracking-wider text-rose-500 mb-2 block">
              Raw Frustration (Private Vent)
            </span>
            <p className="text-sm md:text-base text-gray-800 dark:text-slate-200 leading-relaxed min-h-[70px]">
              "{sample.raw}"
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-gray-400">
              <span>Status: Private (X only)</span>
            </div>
          </div>

          {/* Mediated Output Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#06A8A8]/30 shadow-sm relative transition-all duration-300">
            <span className="text-xs font-medium uppercase tracking-wider text-[#06A8A8] mb-2 block flex items-center justify-between">
              <span>Duet Mediated Message</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#06A8A8]/10 text-[#06A8A8]">
                {sample.tone}
              </span>
            </span>
            <p className={`text-sm md:text-base text-gray-900 dark:text-white font-medium leading-relaxed min-h-[70px] transition-opacity duration-300 ${isTransforming ? 'opacity-20' : 'opacity-100'}`}>
              "{sample.mediated}"
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs text-[#06A8A8]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Partner Y
              </span>
            </div>
          </div>
        </div>

        {/* Demo Switcher */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#06A8A8] hover:bg-[#0891B2] text-white text-sm font-semibold transition-all shadow-md shadow-[#06A8A8]/20"
          >
            <RefreshCw className={`w-4 h-4 ${isTransforming ? 'animate-spin' : ''}`} />
            <span>Try Another Example</span>
          </button>
        </div>
      </div>
    </section>
  );
};
