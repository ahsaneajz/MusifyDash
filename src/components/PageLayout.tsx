'use client';

import Link from 'next/link';
import styles from './PageLayout.module.css';
import { BRANDING } from '@/config';

interface PageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
    return (
        <div className={styles.layout}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                            </svg>
                        </div>
                        <span>{BRANDING.name}</span>
                    </Link>
                    <Link href="/" className={styles.backBtn}>
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerBg}></div>
                <div className="container">
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </div>
            </header>

            {/* Content */}
            <main className={styles.content}>
                <div className="container">
                    <div className={styles.card}>
                        {children}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <p>© {new Date().getFullYear()} {BRANDING.copyright}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
