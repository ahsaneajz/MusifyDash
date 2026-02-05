import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO } from "@/config";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: {
    default: SEO.title,
    template: `%s | ${SEO.title}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SEO.author }],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    siteName: SEO.title.split(' | ')[0],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title.split(' | ')[0],
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SEO.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <meta name="theme-color" content={SEO.themeColor} />
      </head>
      <body>{children}</body>
    </html>
  );
}

