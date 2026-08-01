import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    // `/app` was disallowed here but never existed as a route. The pages actually
    // worth keeping out of an index are the auth forms: they carry no content a
    // searcher wants, and an indexed sign-in page competes with the landing page
    // for the same queries.
    rules: { userAgent: '*', allow: '/', disallow: ['/login', '/signup'] },
    sitemap: 'https://duet.rexio.pro/sitemap.xml',
  };
}
