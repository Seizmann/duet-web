import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pins the workspace root: an unrelated lockfile higher up the filesystem
  // otherwise makes Turbopack infer the wrong directory.
  turbopack: { root: __dirname },
  // Tree-shakes the icon set down to the handful of glyphs actually imported
  // rather than pulling the whole barrel file into the client bundle.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  poweredByHeader: false,
};

export default nextConfig;
