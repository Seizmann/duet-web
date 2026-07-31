import React from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Bell, LogOut } from 'lucide-react';
import { logoutAction } from '@/app/actions/auth';

export const MobileNav: React.FC = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-canvas pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-[60px] items-center justify-around px-2">
        <Link href="/" className="flex flex-col items-center justify-center w-16 h-full text-accent relative focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent">
          <Home className="h-6 w-6 fill-accent" strokeWidth={1.5} />
          <div className="absolute bottom-1 w-1 h-1 rounded-full bg-accent" />
        </Link>
        <button className="flex flex-col items-center justify-center w-16 h-full text-ink-soft opacity-50 cursor-not-allowed">
          <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-full text-ink-soft opacity-50 cursor-not-allowed">
          <Bell className="h-6 w-6" strokeWidth={1.5} />
        </button>
        
        {/* Simple logout trigger for mobile placeholder since no drawer/menu is built yet */}
        <form action={logoutAction} className="h-full">
          <button type="submit" className="flex flex-col items-center justify-center w-16 h-full text-ink-soft hover:text-ink transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent">
            <LogOut className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </form>
      </div>
    </nav>
  );
};
