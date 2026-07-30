import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-noto-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RexiO Duet — Relationship Harmony & Private Social Platform',
  description:
    'RexiO Duet is a private, high-trust platform for couples and close friend circles featuring AI mediation and zero-manipulation feed ranking.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'RexiO Duet — Relationship Harmony Platform',
    description: 'Private social layer and AI mediation for couples & friend circles.',
    url: 'https://duet.rexio.pro',
    siteName: 'RexiO Duet',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <body className="antialiased selection:bg-[#06A8A8]/20">{children}</body>
    </html>
  );
}
