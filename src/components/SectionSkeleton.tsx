import styles from './SectionSkeleton.module.css';

export default function SectionSkeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.header}>
                <div className={styles.label}></div>
                <div className={styles.title}></div>
                <div className={styles.subtitle}></div>
            </div>
            <div className={styles.grid}>
                {[...Array(3)].map((_, i) => (
                    <div key={i} className={styles.card}></div>
                ))}
            </div>
        </div>
    );
}
