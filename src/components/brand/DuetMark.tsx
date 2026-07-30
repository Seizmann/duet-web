import React from 'react';

/**
 * The Duet mark: two independent strokes that bend toward a shared centre line.
 * Drawn as inline SVG rather than a raster asset so it costs no extra request,
 * scales losslessly, and inherits the surrounding text colour in both themes.
 */
export const DuetMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 3v7c0 3 2 4.5 7 4.5" stroke="currentColor" opacity={0.45} />
    <path d="M19 3v7c0 3-2 4.5-7 4.5" stroke="currentColor" opacity={0.45} />
    <path d="M12 14.5V21" stroke="currentColor" />
  </svg>
);
