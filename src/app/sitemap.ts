import { MetadataRoute } from 'next';
import { SEO } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/docs',
        '/faq',
        '/terms',
        '/privacy',
    ].map((route) => ({
        url: `${SEO.url}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
