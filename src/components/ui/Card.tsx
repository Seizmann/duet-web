import * as React from 'react';

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border border-line bg-surface p-6 sm:p-8 ${className}`}
      {...props}
    />
  )
);
Card.displayName = 'Card';
