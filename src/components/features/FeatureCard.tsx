import React from 'react';
import { ThumbsUp, ThumbsDown, MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: 'reactions' | 'vent' | 'privacy';
}> = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-2xl bg-[#F8FAFB] dark:bg-[#1E293B] border border-gray-200 dark:border-slate-800 hover:border-[#06A8A8]/50 transition-all duration-300 group shadow-sm hover:shadow-md">
      <div className="w-12 h-12 rounded-xl bg-[#06A8A8]/10 text-[#06A8A8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon === 'reactions' && <ThumbsUp className="w-6 h-6" />}
        {icon === 'vent' && <MessageSquareQuote className="w-6 h-6" />}
        {icon === 'privacy' && <ShieldAlert className="w-6 h-6" />}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};
