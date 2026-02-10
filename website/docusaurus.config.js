/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Veto',
    tagline: 'Identity & Safety Layer for B2B Stablecoin Payments',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://veto-ai.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    organizationName: 'veto-ai', // Usually your GitHub org/user name.
    projectName: 'veto-ai.github.io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/', // Serve the docs at the site's root
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Veto',
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/veto-ai/veto',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Introduction',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Product',
                        items: [
                            {
                                label: 'Verification Guide',
                                href: '#',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Veto. Built with Docusaurus.`,
            },
            prism: {
                theme: require('prism-react-renderer').themes.github,
                darkTheme: require('prism-react-renderer').themes.dracula,
            },
        }),
};

module.exports = config;
