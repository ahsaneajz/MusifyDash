import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import styles from './faq.module.css';
import { FAQ_ITEMS } from '@/config';

export const metadata: Metadata = {
    title: 'FAQ | Musify Music Bot',
    description: 'Frequently asked questions about Musify Music Bot - your Discord music companion.',
};

export default function FAQPage() {
    return (
        <PageLayout
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Musify"
        >
            <div className={styles.faqList}>
                {FAQ_ITEMS.map((item, index) => (
                    <details key={index} className={styles.faqItem}>
                        <summary className={styles.question}>
                            <span className={styles.questionIcon}>?</span>
                            {item.question}
                            <span className={styles.arrow}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                        </summary>
                        <p className={styles.answer}>{item.answer}</p>
                    </details>
                ))}
            </div>

            <hr />

            <div className={styles.contact}>
                <h3>Still have questions?</h3>
                <p>Join our Discord support server for personalized help from our team!</p>
            </div>
        </PageLayout>
    );
}

