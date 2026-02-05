import { MetadataRoute } from 'next';
import { SEO } from '@/config';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${SEO.url}/sitemap.xml`,
    };
}
