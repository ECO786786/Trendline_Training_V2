import { MetadataRoute } from 'next'

// Use the production URL as default, but allow override via environment variable
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://trendlinec.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Block admin and API routes from crawling
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
