import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
    title: 'Privacy Policy | Musify Music Bot',
    description: 'Privacy Policy for Musify Music Bot - how we handle your data.',
};

export default function PrivacyPage() {
    return (
        <PageLayout
            title="Privacy Policy"
            subtitle="Last updated: February 2026"
        >
            <h2>Introduction</h2>
            <p>
                Musify Music Bot ("we", "our", or "the Bot") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and safeguard your
                information when you use our Discord bot.
            </p>

            <h2>Information We Collect</h2>

            <h3>Automatically Collected Data</h3>
            <p>When you interact with the Bot, we automatically collect:</p>
            <ul>
                <li><strong>Discord User ID</strong> - Your unique Discord identifier</li>
                <li><strong>Discord Server ID</strong> - The servers where you use the Bot</li>
                <li><strong>Command Usage</strong> - Commands you execute and their timestamps</li>
                <li><strong>Voice Channel Data</strong> - Duration spent in voice channels with the Bot</li>
            </ul>

            <h3>User-Provided Data</h3>
            <p>You may voluntarily provide:</p>
            <ul>
                <li><strong>Playlist Data</strong> - Songs and playlists you create</li>
                <li><strong>Preferences</strong> - Volume settings and other preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use collected data to:</p>
            <ul>
                <li>Provide and maintain the Bot's functionality</li>
                <li>Generate server leaderboards and personal statistics</li>
                <li>Store and restore your playlists and preferences</li>
                <li>Improve and optimize the service</li>
                <li>Detect and prevent abuse or violations of our terms</li>
            </ul>

            <h2>Data Storage</h2>
            <p>
                Your data is stored securely in our MongoDB database. We implement appropriate
                security measures to protect against unauthorized access, alteration, or
                destruction of your data.
            </p>

            <h2>Data Retention</h2>
            <p>We retain your data for as long as:</p>
            <ul>
                <li>You actively use the Bot</li>
                <li>Your server has the Bot installed</li>
                <li>It is necessary for the functionality you've used</li>
            </ul>
            <p>
                Inactive data may be automatically deleted after 12 months of inactivity.
            </p>

            <h2>Data Sharing</h2>
            <p>
                We do not sell, trade, or rent your personal data to third parties. We may
                share anonymized, aggregated statistics for service improvement purposes.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li><strong>Access</strong> - Request a copy of your stored data</li>
                <li><strong>Deletion</strong> - Request deletion of your data</li>
                <li><strong>Correction</strong> - Request correction of inaccurate data</li>
                <li><strong>Portability</strong> - Request your data in a portable format</li>
            </ul>
            <p>
                To exercise these rights, please contact us through our Discord support server.
            </p>

            <h2>Third-Party Services</h2>
            <p>The Bot integrates with:</p>
            <ul>
                <li><strong>Discord</strong> - Subject to <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">Discord's Privacy Policy</a></li>
                <li><strong>Spotify</strong> - Subject to <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Spotify's Privacy Policy</a></li>
            </ul>



            <h2>Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have questions or concerns about this Privacy Policy, please contact
                us through our Discord support server.
            </p>
        </PageLayout>
    );
}

