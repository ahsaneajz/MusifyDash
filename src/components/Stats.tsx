'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';
import { STATS, TECH_STACK } from '@/config';

const STAT_ITEMS = [
    {
        icon: '🎵',
        value: STATS.songsPlayed,
        suffix: '+',
        label: 'Songs Played',
        color: '#1db954',
    },
    {
        icon: '🎧',
        value: STATS.users,
        suffix: '+',
        label: 'Active Users',
        color: '#a855f7',
    },
    {
        icon: '🌐',
        value: STATS.servers,
        suffix: '+',
        label: 'Discord Servers',
        color: '#6366f1',
    },
    {
        icon: '⏱️',
        value: STATS.uptime,
        suffix: '%',
        label: 'Uptime',
        color: '#22c55e',
    },
];

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState<number[]>(STAT_ITEMS.map(() => 0));
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateCounters = () => {
        const duration = 800;
        const steps = 30;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            setCounts(STAT_ITEMS.map((stat) => Math.floor(stat.value * eased)));

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounts(STAT_ITEMS.map((stat) => stat.value));
            }
        }, stepDuration);
    };

    const formatNumber = (num: number) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toLocaleString();
    };

    return (
        <section id="stats" className={`section ${styles.stats}`} ref={sectionRef}>
            <div className="container">
                <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
                    <span className={styles.label}>Statistics</span>
                    <h2>Trusted by <span className="gradient-text">Thousands</span> of Communities</h2>
                    <p>Join thousands of Discord servers already enjoying premium music experiences.</p>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {STAT_ITEMS.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={styles.card}
                            style={{ '--index': index, '--color': stat.color } as React.CSSProperties}
                        >
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{stat.icon}</span>
                            </div>
                            <div className={styles.value}>
                                {stat.label === 'Uptime' ? counts[index].toFixed(1) : formatNumber(counts[index])}
                                {stat.suffix}
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progress}
                                    style={{ width: isVisible ? '100%' : '0%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className={`${styles.techStack} ${isVisible ? styles.visible : ''}`}>
                    <h3>Powered By</h3>
                    <div className={styles.techGrid}>
                        {TECH_STACK.map((tech) => (
                            <div key={tech.name} className={styles.techCard}>
                                <span className={styles.techName}>{tech.name}</span>
                                {tech.version && <span className={styles.techVersion}>{tech.version}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
