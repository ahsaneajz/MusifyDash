import styles from './Footer.module.css';
import { INVITE_URL, SUPPORT_SERVER, GITHUB_URL, BRANDING, FOOTER_QUICK_LINKS, FOOTER_RESOURCES } from '@/config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                                </svg>
                            </div>
                            <span>{BRANDING.name}</span>
                        </div>
                        <p>Your ultimate Discord music companion. {BRANDING.credits.replace('Powered by ', 'Powered by ')}</p>
                        <div className={styles.social}>
                            <a href={SUPPORT_SERVER} target="_blank" rel="noopener noreferrer" aria-label="Discord">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z" />
                                </svg>
                            </a>
                            {GITHUB_URL && (
                                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul>
                            {FOOTER_QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            {FOOTER_RESOURCES.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className={styles.cta}>
                        <h4>Ready to Start?</h4>
                        <p>Add {BRANDING.name} to your server and start the party!</p>
                        <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Add to Discord
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {currentYear} {BRANDING.copyright}. Made with 💜 for Discord communities.</p>
                    <p className={styles.credits}>{BRANDING.credits}</p>
                </div>
            </div>
        </footer>
    );
}
