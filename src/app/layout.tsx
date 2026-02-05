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
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SEO.author }],
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: "website",
    locale: "en_US",
    siteName: SEO.title.split(' | ')[0],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title.split(' | ')[0],
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
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

