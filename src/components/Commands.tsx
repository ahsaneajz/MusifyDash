'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Commands.module.css';
import { COMMAND_CATEGORIES } from '@/config';

export default function Commands() {
    const [activeCategory, setActiveCategory] = useState('music');
    const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleCopy = (command: string) => {
        navigator.clipboard.writeText(command);
        setCopiedCommand(command);
        setTimeout(() => setCopiedCommand(null), 2000);
    };

    const activeCommands = COMMAND_CATEGORIES.find((c) => c.id === activeCategory)?.commands || [];

    return (
        <section id="commands" className={`section ${styles.commands}`} ref={sectionRef}>
            <div className="container">
                <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
                    <span className={styles.label}>Commands</span>
                    <h2>Powerful Commands at Your <span className="gradient-text">Fingertips</span></h2>
                    <p>Simple to use, yet powerful enough for any music session.</p>
                </div>

                <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                    {/* Category Tabs */}
                    <div className={styles.tabs}>
                        {COMMAND_CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                className={`${styles.tab} ${activeCategory === category.id ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Commands List */}
                    <div className={styles.list}>
                        {activeCommands.map((cmd, index) => (
                            <div
                                key={cmd.name}
                                className={styles.command}
                                style={{ '--index': index } as React.CSSProperties}
                                onClick={() => handleCopy(cmd.name)}
                            >
                                <div className={styles.commandLeft}>
                                    <code className={styles.commandName}>
                                        {cmd.name}
                                        {cmd.args && <span className={styles.commandArgs}> {cmd.args}</span>}
                                    </code>
                                    <p className={styles.commandDesc}>{cmd.description}</p>
                                </div>
                                <button className={styles.copyBtn}>
                                    {copiedCommand === cmd.name ? (
                                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 8l4 4 6-8" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="5" y="5" width="8" height="10" rx="1" />
                                            <path d="M3 11V3a1 1 0 011-1h6" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Mention Commands Note */}
                    <div className={styles.note}>
                        <span className={styles.noteIcon}>💬</span>
                        <div>
                            <strong>Mention Commands</strong>
                            <p>You can also control the bot by mentioning it: <code>@bot play &lt;song&gt;</code>, <code>@bot skip</code>, <code>@bot queue</code>, and more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
