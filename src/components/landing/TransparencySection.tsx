import React from 'react';
import { ShieldCheck, Eye, Database, Code2 } from 'lucide-react';

export const TransparencySection: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto my-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Algorithmic Transparency & Uncompromising Privacy
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
          Built on verifiable open-source code. No dark patterns, no infinite scroll tuned for addiction, and zero exposure of your raw confessional vents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: 2-Tier Feed */}
        <div className="p-8 rounded-3xl bg-[#F8FAFB] dark:bg-[#1E293B] border border-gray-200 dark:border-slate-800 relative">
          <div className="w-12 h-12 rounded-2xl bg-[#06A8A8]/10 text-[#06A8A8] flex items-center justify-center mb-6">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            2-Tier Non-Manipulative Feed
          </h3>
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
            Tier 1 (Connects) is strictly chronological. Tier 2 (Discovery) uses transparent formula-based scoring where every single post contains a clear "Why Am I Seeing This" explanation.
          </p>
          <div className="p-3 rounded-xl bg-white dark:bg-[#0F172A] border border-gray-100 dark:border-slate-800 text-xs font-mono text-gray-500 dark:text-slate-400">
            Score = (0.3 * Recency) + (0.4 * Interest) + (0.15 * Signal) + (0.1 * Quality)
          </div>
        </div>

        {/* Card 2: Schema Isolation */}
        <div className="p-8 rounded-3xl bg-[#F8FAFB] dark:bg-[#1E293B] border border-gray-200 dark:border-slate-800 relative">
          <div className="w-12 h-12 rounded-2xl bg-[#06A8A8]/10 text-[#06A8A8] flex items-center justify-center mb-6">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            Strict Database Schema Isolation
          </h3>
          <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
            Your private AI confessionals (Vent Logs) are stored in an isolated, encrypted database pool. Partner Y never has API or query access to Partner X's raw vent logs under any circumstance.
          </p>
          <div className="p-3 rounded-xl bg-white dark:bg-[#0F172A] border border-gray-100 dark:border-slate-800 text-xs font-mono text-emerald-500">
            ✓ Isolated Sensitive DB Cluster Active
          </div>
        </div>
      </div>
    </section>
  );
};
