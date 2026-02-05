'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Premium.module.css';
import { INVITE_URL, PREMIUM } from '@/config';

export default function Premium() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    if (!PREMIUM.enabled) return null;

    return (
        <section id="premium" className={`section ${styles.premium}`} ref={sectionRef}>
            {/* Decorative Background */}
            <div className={styles.bgDecor}>
                <div className={styles.glow1}></div>
                <div className={styles.glow2}></div>
            </div>

            <div className="container">
                <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.left}>
                        <span className={styles.label}>Premium</span>
                        <h2>Unlock the <span className="gradient-text">Full Experience</span></h2>
                        <p>
                            Take your music experience to the next level with premium features.
                            Get priority support, exclusive features, and more.
                        </p>

                        <div className={styles.features}>
                            {PREMIUM.features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={styles.feature}
                                    style={{ '--index': index } as React.CSSProperties}
                                >
                                    <span className={styles.featureIcon}>{feature.icon}</span>
                                    <div>
                                        <strong>{feature.title}</strong>
                                        <span>{feature.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.card}>
                            <div className={styles.cardBadge}>Most Popular</div>
                            <h3>Premium</h3>
                            <div className={styles.price}>
                                <span className={styles.currency}>{PREMIUM.currency}</span>
                                <span className={styles.amount}>{PREMIUM.price}</span>
                                <span className={styles.period}>{PREMIUM.period}</span>
                            </div>
                            <p className={styles.cardDesc}>Everything you need for the ultimate music experience</p>

                            <ul className={styles.cardFeatures}>
                                {PREMIUM.cardFeatures.map((feature) => (
                                    <li key={feature}>✓ {feature}</li>
                                ))}
                            </ul>

                            <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                Get Premium
                            </a>

                            {PREMIUM.comingSoonText && (
                                <p className={styles.cardNote}>{PREMIUM.comingSoonText}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
