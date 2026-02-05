'use client';

import { useEffect, useRef } from 'react';
import styles from './Features.module.css';
import { FEATURES } from '@/config';

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`);
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" className={`section ${styles.features}`} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Features</span>
                    <h2>Everything You Need for the <span className="gradient-text">Perfect</span> Music Experience</h2>
                    <p>Packed with powerful features to make your Discord server the ultimate music hangout.</p>
                </div>

                <div className={styles.grid}>
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`${styles.card} glass-card`}
                            style={{ '--index': index } as React.CSSProperties}
                        >
                            <div className={styles.iconWrapper} style={{ background: feature.gradient }}>
                                <span className={styles.icon}>{feature.icon}</span>
                            </div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                            <ul className={styles.highlights}>
                                {feature.highlights.map((highlight) => (
                                    <li key={highlight}>
                                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 8l4 4 6-8" />
                                        </svg>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
