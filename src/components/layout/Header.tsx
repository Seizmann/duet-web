import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, MessageCircleHeart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0F172A]/80 border-b border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#06A8A8] to-[#0891B2] flex items-center justify-center text-white shadow-md shadow-[#06A8A8]/20">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <span className="font-semibold text-xl tracking-tight bg-gradient-to-r from-gray-900 via-[#06A8A8] to-gray-700 dark:from-white dark:via-[#06A8A8] dark:to-slate-300 bg-clip-text text-transparent">
            Duet
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Manipulation Feed</span>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-[#06A8A8] hover:bg-[#0891B2] text-white transition-all shadow-md shadow-[#06A8A8]/20 hover:scale-[1.02] active:scale-[0.98]">
            <Sparkles className="w-4 h-4" />
            <span>Open App</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
