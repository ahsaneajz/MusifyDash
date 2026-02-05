import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
    title: 'Terms of Service | Musify Music Bot',
    description: 'Terms of Service for using Musify Music Bot on Discord.',
};

export default function TermsPage() {
    return (
        <PageLayout
            title="Terms of Service"
            subtitle="Last updated: February 2026"
        >
            <h2>1. Acceptance of Terms</h2>
            <p>
                By adding Musify Music Bot ("the Bot") to your Discord server or using its features,
                you agree to be bound by these Terms of Service. If you do not agree to these terms,
                please do not use the Bot.
            </p>

            <h2>2. Description of Service</h2>
            <p>
                Musify is a Discord bot that provides music streaming capabilities within Discord
                voice channels. The Bot allows users to play music from supported sources, manage
                queues, create playlists, and view listening statistics.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>When using the Bot, you agree to:</p>
            <ul>
                <li>Comply with Discord's Terms of Service and Community Guidelines</li>
                <li>Not use the Bot for any illegal or unauthorized purpose</li>
                <li>Not attempt to abuse, exploit, or disrupt the Bot's functionality</li>
                <li>Not use automated scripts or bots to interact with the Bot</li>
                <li>Respect the intellectual property rights of content played through the Bot</li>
            </ul>

            <h2>4. Content and Music Sources</h2>
            <p>
                The Bot streams music from third-party sources such as Spotify. We do not host or
                store any copyrighted music content. Users are responsible for ensuring they have
                the right to play the content they request through the Bot.
            </p>

            <h2>5. Data Collection</h2>
            <p>The Bot collects and stores the following data:</p>
            <ul>
                <li>Discord user IDs and server IDs for functionality purposes</li>
                <li>User-created playlists and preferences</li>
                <li>Listening statistics for leaderboard features</li>
                <li>Command usage for improving the service</li>
            </ul>
            <p>
                For more details, please review our <a href="/privacy">Privacy Policy</a>.
            </p>

            <h2>6. Service Availability</h2>
            <p>
                We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted access
                to the Bot. We reserve the right to modify, suspend, or discontinue the service
                at any time without prior notice.
            </p>

            <h2>7. Premium Features</h2>
            <p>
                Certain features may be offered as premium services. Payment terms, refund policies,
                and feature access will be clearly communicated at the time of purchase.
            </p>

            <h2>8. Termination</h2>
            <p>
                We reserve the right to terminate or suspend access to the Bot for any user or
                server that violates these terms or engages in abusive behavior.
            </p>

            <h2>9. Disclaimer of Warranties</h2>
            <p>
                The Bot is provided "as is" without any warranties, express or implied. We do not
                guarantee the accuracy, reliability, or availability of the service.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
                In no event shall the Bot developers be liable for any indirect, incidental,
                special, or consequential damages arising from your use of the service.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
                We reserve the right to modify these terms at any time. Continued use of the Bot
                after changes constitutes acceptance of the new terms.
            </p>

            <h2>12. Contact</h2>
            <p>
                If you have questions about these Terms of Service, please contact us through
                our Discord support server.
            </p>
        </PageLayout>
    );
}

