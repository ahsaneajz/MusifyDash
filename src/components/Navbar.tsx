'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { NAV_LINKS, INVITE_URL, SUPPORT_SERVER, BRANDING } from '@/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
          </div>
          <span className={styles.logoText}>{BRANDING.name}</span>
        </a>

        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <a href={SUPPORT_SERVER} target="_blank" rel="noopener noreferrer" className={styles.supportBtn}>
            Support
          </a>
          <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.inviteBtn}`}>
            Add to Discord
          </a>
        </div>

        <button
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className={styles.mobileActions}>
          <a href={SUPPORT_SERVER} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Support Server
          </a>
          <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Add to Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
