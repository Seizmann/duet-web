import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Duet — Private AI Mediation for Couples and Close Friends',
    short_name: 'Duet',
    description:
      'A private space for couples and close friends, with an AI that mediates instead of amplifies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#06a8a8',
  };
}
