import * as React from 'react';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor={inputId} className="text-sm font-medium text-ink">
          {label}
        </label>
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            className={`flex w-full rounded-lg border min-h-[44px] px-4 py-2 text-ink bg-canvas transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-ink-soft/50 ${
              error ? 'border-red-500/50 focus:ring-red-500/50' : 'border-line'
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <div className="flex items-center gap-1.5 text-red-500 mt-1">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
