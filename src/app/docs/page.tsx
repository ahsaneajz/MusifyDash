import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import styles from './docs.module.css';

export const metadata: Metadata = {
    title: 'Documentation | Musify Music Bot',
    description: 'Complete documentation for Musify Music Bot commands and features.',
};

const DOCS_SECTIONS = [
    {
        title: '🚀 Getting Started',
        content: `
      <h3>Adding the Bot</h3>
      <p>To add Musify to your Discord server:</p>
      <ol>
        <li>Click the "Add to Discord" button on our homepage</li>
        <li>Select the server you want to add the bot to</li>
        <li>Authorize the required permissions</li>
        <li>The bot will join your server and be ready to use!</li>
      </ol>
      
      <h3>Required Permissions</h3>
      <p>Musify requires the following permissions to function properly:</p>
      <ul>
        <li><strong>Connect</strong> - Join voice channels</li>
        <li><strong>Speak</strong> - Play audio in voice channels</li>
        <li><strong>Send Messages</strong> - Send command responses</li>
        <li><strong>Embed Links</strong> - Display rich embed messages</li>
        <li><strong>Use Application Commands</strong> - Enable slash commands</li>
      </ul>
    `,
    },
    {
        title: '🎵 Music Playback',
        content: `
      <h3>Playing Music</h3>
      <p>Use <code>/play &lt;query&gt;</code> to start playing music. You can:</p>
      <ul>
        <li>Search by song name: <code>/play never gonna give you up</code></li>
        <li>Use a Spotify track URL: <code>/play https://open.spotify.com/track/...</code></li>
        <li>Load a Spotify playlist: <code>/play https://open.spotify.com/playlist/...</code></li>
        <li>Load a Spotify album: <code>/play https://open.spotify.com/album/...</code></li>
      </ul>
      
      <h3>Playback Controls</h3>
      <table>
        <tr><td><code>/pause</code></td><td>Pause playback</td></tr>
        <tr><td><code>/resume</code></td><td>Resume playback</td></tr>
        <tr><td><code>/skip</code></td><td>Skip current track</td></tr>
        <tr><td><code>/stop</code></td><td>Stop playback</td></tr>
        <tr><td><code>/volume &lt;0-200&gt;</code></td><td>Set volume</td></tr>
        <tr><td><code>/forward</code></td><td>Seek forward</td></tr>
        <tr><td><code>/rewind</code></td><td>Seek backward</td></tr>
      </table>
    `,
    },
    {
        title: '📋 Queue Management',
        content: `
      <h3>Viewing the Queue</h3>
      <p>Use <code>/queue</code> to view the current queue. Navigate through pages using the Prev/Next buttons.</p>
      
      <h3>Queue Commands</h3>
      <table>
        <tr><td><code>/shuffle</code></td><td>Shuffle all tracks in queue</td></tr>
        <tr><td><code>/loop off</code></td><td>Disable looping</td></tr>
        <tr><td><code>/loop track</code></td><td>Loop current track</td></tr>
        <tr><td><code>/loop queue</code></td><td>Loop entire queue</td></tr>
        <tr><td><code>/remove &lt;position&gt;</code></td><td>Remove track by position</td></tr>
        <tr><td><code>/clear</code></td><td>Clear entire queue</td></tr>
      </table>
    `,
    },
    {
        title: '💾 Playlists',
        content: `
      <h3>Creating Playlists</h3>
      <p>Personal playlists are saved to your account and accessible from any server.</p>
      
      <h3>Playlist Commands</h3>
      <table>
        <tr><td><code>/playlist create &lt;name&gt;</code></td><td>Create a new playlist</td></tr>
        <tr><td><code>/playlist add &lt;name&gt;</code></td><td>Add current song to playlist</td></tr>
        <tr><td><code>/playlist play &lt;name&gt;</code></td><td>Load and play a playlist</td></tr>
        <tr><td><code>/playlist list</code></td><td>View all your playlists</td></tr>
        <tr><td><code>/playlist view &lt;name&gt;</code></td><td>View songs in a playlist</td></tr>
        <tr><td><code>/playlist remove</code></td><td>Remove songs from playlist</td></tr>
        <tr><td><code>/playlist delete</code></td><td>Delete a playlist</td></tr>
      </table>
    `,
    },
    {
        title: '📊 Stats & Leaderboards',
        content: `
      <h3>Server Leaderboards</h3>
      <p>Track who listens to the most music in your server!</p>
      
      <h3>Stats Commands</h3>
      <table>
        <tr><td><code>/leaderboard</code></td><td>Top listeners (with medals 🥇🥈🥉)</td></tr>
        <tr><td><code>/leaderboard songs</code></td><td>Most played songs</td></tr>
        <tr><td><code>/me</code></td><td>Your personal stats</td></tr>
        <tr><td><code>/server-stats</code></td><td>Server-wide statistics</td></tr>
        <tr><td><code>/lyrics</code></td><td>Get lyrics for current song</td></tr>
      </table>
    `,
    },
    {
        title: '💬 Mention Commands',
        content: `
      <h3>Alternative Control Method</h3>
      <p>You can also control the bot by mentioning it instead of using slash commands:</p>
      <ul>
        <li><code>@Musify play &lt;song&gt;</code> - Play a song</li>
        <li><code>@Musify skip</code> - Skip track</li>
        <li><code>@Musify pause</code> - Pause playback</li>
        <li><code>@Musify resume</code> - Resume playback</li>
        <li><code>@Musify queue</code> - View queue</li>
        <li><code>@Musify np</code> - Now playing</li>
        <li><code>@Musify volume &lt;0-200&gt;</code> - Set volume</li>
        <li><code>@Musify help</code> - View all mention commands</li>
      </ul>
    `,
    },
];

export default function DocsPage() {
    return (
        <PageLayout
            title="Documentation"
            subtitle="Learn how to use all of Musify's features"
        >
            <nav className={styles.toc}>
                <h4>Table of Contents</h4>
                <ul>
                    {DOCS_SECTIONS.map((section, index) => (
                        <li key={index}>
                            <a href={`#section-${index}`}>{section.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <hr />

            <div className={styles.sections}>
                {DOCS_SECTIONS.map((section, index) => (
                    <section key={index} id={`section-${index}`} className={styles.section}>
                        <h2>{section.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </section>
                ))}
            </div>
        </PageLayout>
    );
}

