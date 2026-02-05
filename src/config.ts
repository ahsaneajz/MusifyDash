/**
 * ═══════════════════════════════════════════════════════════════════════════
 * MUSIFY MUSIC BOT - DASHBOARD CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Edit this file to customize your dashboard. All configurable values are
 * centralized here for easy management.
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ============================================================================
// BOT & DISCORD SETTINGS
// ============================================================================

/** Your Discord Bot's Client ID (find in Discord Developer Portal) */
export const BOT_CLIENT_ID = '1431905222279692371';

/** Discord invite URL */
export const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}`;

/** Your Discord support server invite link */
export const SUPPORT_SERVER = 'https://discord.gg/F5yKuwZfhJ';

/** Your GitHub repository (optional - leave empty to hide) */
export const GITHUB_URL = 'https://github.com';

// ============================================================================
// BRANDING
// ============================================================================

export const BRANDING = {
    /** Bot name displayed across the dashboard */
    name: 'Musify',

    /** Tagline shown in hero section */
    tagline: 'Your Ultimate Discord Music Experience',

    /** Short description */
    description: 'High-quality music streaming, personal playlists, server leaderboards, and seamless playback. All in one powerful Discord bot.',

    /** Footer copyright text */
    copyright: 'Musify Music Bot',

    /** Credits shown in footer */
    credits: 'Powered by Spotify • Lavalink • Discord.js',
};

// ============================================================================
// STATISTICS (Displayed in Hero & Stats sections)
// ============================================================================

export const STATS = {
    /** Number of Discord servers (displayed with + suffix) */
    servers: 20,

    /** Number of active users (displayed with + suffix) */
    users: 6500,

    /** Total songs played (displayed with + suffix) */
    songsPlayed: 2500,

    /** Bot uptime percentage */
    uptime: 99.9,
};

// ============================================================================
// FEATURES (Displayed on homepage)
// ============================================================================

export const FEATURES = [
    {
        icon: '🎶',
        title: 'Music Playback',
        description: 'Stream high-quality music from Spotify. Play tracks, playlists, and albums with crystal-clear audio.',
        highlights: ['Spotify Integration', 'Lavalink v4 Powered', 'Volume Control 0-200%'],
        gradient: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)',
    },
    {
        icon: '📋',
        title: 'Queue Management',
        description: 'Full control over your music queue with pagination, shuffle, loop modes, and easy track removal.',
        highlights: ['Shuffle & Loop', 'Paginated Queue', 'Remove Tracks'],
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    },
    {
        icon: '💾',
        title: 'Personal Playlists',
        description: 'Create and save your favorite playlists. Access them anytime, anywhere across all servers.',
        highlights: ['Create Playlists', 'Save Songs', 'Cross-Server Access'],
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    },
    {
        icon: '📊',
        title: 'Stats & Leaderboards',
        description: 'Track listening stats and compete on server leaderboards. See your most played songs and artists.',
        highlights: ['Server Leaderboards', 'Personal Stats', 'Song Analytics'],
        gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    },
    {
        icon: '🎤',
        title: 'Lyrics Support',
        description: 'Get real-time lyrics for any song playing. Sing along with your friends!',
        highlights: ['Synced Lyrics', 'Search Lyrics', 'Multiple Sources'],
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    },
    {
        icon: '⚡',
        title: 'Ultra Reliable',
        description: 'Built with session recovery and connection stability. Music never stops unexpectedly.',
        highlights: ['Auto Reconnect', 'Session Resume', 'Heartbeat Monitoring'],
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    },
];

// ============================================================================
// COMMANDS (Displayed in Commands section)
// ============================================================================

export const COMMAND_CATEGORIES = [
    {
        id: 'music',
        label: '🎶 Music',
        commands: [
            { name: '/play', args: '<query>', description: 'Play a song by name or Spotify URL' },
            { name: '/pause', args: '', description: 'Pause the current track' },
            { name: '/resume', args: '', description: 'Resume playback' },
            { name: '/skip', args: '', description: 'Skip to the next track' },
            { name: '/stop', args: '', description: 'Stop playback and clear queue' },
            { name: '/volume', args: '<0-200>', description: 'Adjust the playback volume' },
            { name: '/forward', args: '', description: 'Seek forward in the track' },
            { name: '/rewind', args: '', description: 'Seek backward in the track' },
            { name: '/nowplaying', args: '', description: 'Show the currently playing track' },
        ],
    },
    {
        id: 'queue',
        label: '📋 Queue',
        commands: [
            { name: '/queue', args: '', description: 'View the current queue with pagination' },
            { name: '/shuffle', args: '', description: 'Shuffle the queue' },
            { name: '/loop', args: '<off|track|queue>', description: 'Set loop mode' },
            { name: '/remove', args: '<position>', description: 'Remove a song by position' },
            { name: '/clear', args: '', description: 'Clear the entire queue' },
        ],
    },
    {
        id: 'playlists',
        label: '💾 Playlists',
        commands: [
            { name: '/playlist create', args: '<name>', description: 'Create a personal playlist' },
            { name: '/playlist add', args: '<name>', description: 'Add current song to playlist' },
            { name: '/playlist play', args: '<name>', description: 'Load and play a saved playlist' },
            { name: '/playlist list', args: '', description: 'View all your playlists' },
            { name: '/playlist view', args: '<name>', description: 'View songs in a playlist' },
            { name: '/playlist remove', args: '', description: 'Remove songs from playlist' },
            { name: '/playlist delete', args: '', description: 'Delete a playlist' },
        ],
    },
    {
        id: 'stats',
        label: '📊 Stats',
        commands: [
            { name: '/leaderboard', args: '', description: 'Top listeners in the server' },
            { name: '/leaderboard songs', args: '', description: 'Most played songs in server' },
            { name: '/me', args: '', description: 'Your personal listening stats' },
            { name: '/server-stats', args: '', description: 'Server-wide music statistics' },
            { name: '/lyrics', args: '', description: 'Get lyrics for the current song' },
        ],
    },
    {
        id: 'utility',
        label: '🛠️ Utility',
        commands: [
            { name: '/join', args: '', description: 'Join your voice channel' },
            { name: '/disconnect', args: '', description: 'Leave the voice channel' },
            { name: '/grab', args: '', description: 'Save current song to your DMs' },
            { name: '/ping', args: '', description: 'Check bot latency' },
            { name: '/bot-info', args: '', description: 'Bot statistics and memory usage' },
            { name: '/help', args: '', description: 'View all commands' },
            { name: '/faq', args: '', description: 'Frequently asked questions' },
        ],
    },
];

// ============================================================================
// PREMIUM FEATURES
// ============================================================================

export const PREMIUM = {
    /** Enable or disable premium section */
    enabled: false,

    /** Price display */
    price: '4.99',
    currency: '$',
    period: '/month',

    /** "Coming soon" text (set to empty string to hide) */
    comingSoonText: '✨ Coming soon - Currently free for everyone!',

    /** Premium features list */
    features: [
        { icon: '🎵', title: 'Unlimited Playlists', description: 'Create unlimited personal playlists' },
        { icon: '🔊', title: '24/7 Mode', description: 'Keep the bot in your channel 24/7' },
        { icon: '⚡', title: 'Priority Queue', description: 'Skip the queue with priority support' },
        { icon: '🎨', title: 'Custom Embeds', description: 'Personalize your music embeds' },
        { icon: '📊', title: 'Advanced Stats', description: 'Detailed listening analytics' },
        { icon: '🎤', title: 'Lyrics Display', description: 'Real-time synced lyrics' },
    ],

    /** Pricing card highlights */
    cardFeatures: [
        'All premium features',
        'Priority support',
        'Early access to updates',
        'No ads or interruptions',
        'Custom bot nickname',
    ],
};

// ============================================================================
// TECH STACK (Displayed in Stats section)
// ============================================================================

export const TECH_STACK = [
    { name: 'Discord.js', version: 'v14' },
    { name: 'Lavalink', version: 'v4' },
    { name: 'Spotify API', version: '' },
    { name: 'MongoDB', version: '' },
];

// ============================================================================
// NAVIGATION LINKS
// ============================================================================

export const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Commands', href: '#commands' },
    { label: 'Stats', href: '#stats' },
    { label: 'Docs', href: '/docs' },
    { label: 'FAQ', href: '/faq' },
];

export const FOOTER_QUICK_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Commands', href: '#commands' },
    { label: 'Statistics', href: '#stats' },
];

export const FOOTER_RESOURCES = [
    { label: 'Documentation', href: '/docs' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
];

// ============================================================================
// FAQ ITEMS
// ============================================================================

export const FAQ_ITEMS = [
    {
        question: 'How do I add Musify to my server?',
        answer: 'Click the "Add to Discord" button on our homepage. You\'ll be redirected to Discord where you can select which server to add the bot to. Make sure you have the "Manage Server" permission on that server.',
    },
    {
        question: 'What music sources does Musify support?',
        answer: 'Musify primarily uses Spotify as its music source. You can play tracks, playlists, and albums directly from Spotify URLs, or simply search by song name.',
    },
    {
        question: 'Why isn\'t YouTube supported?',
        answer: 'Due to YouTube\'s Terms of Service restrictions on automated playback, we\'ve chosen to focus on Spotify integration to ensure reliable, uninterrupted music streaming.',
    },
    {
        question: 'How do I create a playlist?',
        answer: 'Use the /playlist create <name> command to create a new playlist. Then use /playlist add <name> while a song is playing to add it to your playlist.',
    },
    {
        question: 'Can I use my playlists on different servers?',
        answer: 'Yes! Your playlists are saved to your user account and can be accessed from any server where Musify is installed.',
    },
    {
        question: 'What does the volume command do?',
        answer: 'The /volume command adjusts playback volume from 0-200%. Your volume preference is saved and persists across sessions.',
    },
    {
        question: 'Why does the bot disconnect after a while?',
        answer: 'The bot may disconnect if no music is playing and no users are in the voice channel. This helps save resources. Simply use /play to start a new session.',
    },
    {
        question: 'How do server leaderboards work?',
        answer: 'The bot tracks listening time for each user in your server. Use /leaderboard to see the top listeners, complete with 🥇🥈🥉 medals!',
    },
    {
        question: 'Is Musify free to use?',
        answer: 'Yes! Core features are completely free. Premium features (coming soon) will offer additional perks for power users.',
    },
    {
        question: 'How do I get support?',
        answer: 'Join our support Discord server for help from our community and support team. You can find the link in the bot\'s /help command or our website footer.',
    },
];

// ============================================================================
// SEO METADATA
// ============================================================================

export const SEO = {
    title: 'Musify | Discord Music Experience',
    description: 'The ultimate Discord music bot with Spotify integration, personal playlists, server leaderboards, and high-quality streaming. Add Musify to your server today!',
    keywords: ['Discord', 'Music Bot', 'Spotify', 'Discord Bot', 'Music Streaming', 'Musify'],
    author: 'FizzyStudio',
    themeColor: '#1db954',
    url: 'https://musify.fizzystudio.xyz', // TODO: Replace with your actual domain
};

