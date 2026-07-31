import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

// Variable axis: one file covers 400/500/600 and unlocks optical sizing, which
// is what makes the 12px labels and the 56px hero look like they belong to the
// same typeface. Static weights ship three files and no optical correction.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Bengali is a heavy script. It is loaded because the mediation preview ships a
// real Bangla sample, but it is deliberately not the document default: only
// nodes tagged lang="bn" opt into it via the .font-bengali utility.
const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500'],
  variable: '--font-noto-bengali',
  display: 'swap',
});

const SITE_URL = 'https://duet.rexio.pro';

const DESCRIPTION =
  'Duet is a private space for couples and close friends. An AI mediator turns a heated ' +
  'message into one that can actually be heard, private vents are never shown to the other ' +
  'person, and the feed ranking is published as source-available code so it can be verified.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Duet — Private AI Mediation for Couples and Close Friends',
    template: '%s · Duet',
  },
  description: DESCRIPTION,
  applicationName: 'Duet',
  manifest: '/manifest.webmanifest',
  keywords: [
    'relationship communication app',
    'AI mediation for couples',
    'private messaging for couples',
    'non-manipulative social feed',
    'source-available feed algorithm',
  ],
  authors: [{ name: 'Mohammad Sijan', url: 'https://sijan.pro.bd' }],
  creator: 'SpritexAI',
  publisher: 'SpritexAI',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Duet',
    locale: 'en_US',
    title: 'Duet — Private AI Mediation for Couples and Close Friends',
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duet — Private AI Mediation for Couples and Close Friends',
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  // Matches the canvas token in both schemes so mobile browser chrome never
  // flashes a mismatched bar behind the sticky header.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <body>{children}</body>
    </html>
  );
}
