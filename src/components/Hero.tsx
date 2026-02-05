'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { INVITE_URL, BRANDING, STATS } from '@/config';

export default function Hero() {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animated counter for stats
        const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value.toLocaleString() + '+';
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const statElements = entry.target.querySelectorAll('[data-count]');
                        statElements.forEach((el) => {
                            const target = parseInt(el.getAttribute('data-count') || '0');
                            animateValue(el as HTMLElement, 0, target, 800);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.hero}>
            {/* Animated Background Elements */}
            <div className={styles.bgElements}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gradientOrb3}></div>

                {/* Floating Music Notes */}
                <div className={styles.floatingNotes}>
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className={styles.note} style={{ '--delay': `${i * 0.3}s` } as React.CSSProperties}>
                            {['♪', '♫', '♬', '♩'][i]}
                        </span>
                    ))}
                </div>

                {/* Sound Wave Animation */}
                <div className={styles.soundWave}>
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className={styles.waveBar} style={{ '--i': i } as React.CSSProperties}></div>
                    ))}
                </div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    Powered by Spotify & Lavalink
                </div>

                <h1 className={styles.title}>
                    {BRANDING.tagline.split('Discord Music').map((part, i) =>
                        i === 0 ? <span key={i}>{part}<span className="gradient-text">Discord Music</span></span> : part
                    )}
                </h1>

                <p className={styles.subtitle}>
                    {BRANDING.description}
                </p>

                <div className={styles.cta}>
                    <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                        </svg>
                        Add to Discord
                    </a>
                    <a href="#features" className="btn btn-secondary btn-lg">
                        Explore Features
                    </a>
                </div>

                {/* Stats */}
                <div className={styles.stats} ref={statsRef}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber} data-count={STATS.servers}>0+</span>
                        <span className={styles.statLabel}>Servers</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber} data-count={STATS.users}>0+</span>
                        <span className={styles.statLabel}>Users</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber} data-count={STATS.songsPlayed}>0+</span>
                        <span className={styles.statLabel}>Songs Played</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
}
