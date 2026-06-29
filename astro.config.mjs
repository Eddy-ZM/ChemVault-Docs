import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.chemvault.science',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: 'ChemVault',
      description:
        'ChemVault is a commercial SaaS workspace for chemistry operations, workflows, approvals, assets, access control and team visibility.',
      logo: {
        src: './src/assets/chemvault-logo-mark.png',
        alt: 'ChemVault',
      },
      favicon: '/favicon.ico',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico',
            sizes: 'any',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/assets/chemvault-icon-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/assets/favicon.svg',
            type: 'image/svg+xml',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/assets/chemvault-apple-touch-icon.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#f5f5f7',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'application-name',
            content: 'ChemVault',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'ChemVault',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content:
              'A commercial SaaS workspace for controlled chemistry operations, workflows, approvals, assets and team visibility.',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:url',
            content: 'https://docs.chemvault.science/',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: '/cv-docs.js',
            defer: true,
          },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Eddy-ZM/ChemVault-Docs',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: '使用手册',
          items: [
            {
              label: '总览',
              slug: 'manual',
            },
            {
              label: '产品地图',
              slug: 'manual/product-map',
            },
            {
              label: '快速开始',
              slug: 'manual/getting-started',
            },
            {
              label: '主站与中文站',
              slug: 'manual/chemvault-website',
            },
            {
              label: '知识记录',
              slug: 'manual/knowledge-records',
            },
            {
              label: 'Extract',
              slug: 'manual/extract',
            },
            {
              label: 'Files',
              slug: 'manual/files',
            },
            {
              label: 'Mail',
              slug: 'manual/mail',
            },
            {
              label: 'User Center',
              slug: 'manual/user-center',
            },
            {
              label: 'Notifications',
              slug: 'manual/notifications',
            },
            {
              label: 'Molecule Studio',
              slug: 'manual/molecule-studio',
            },
            {
              label: 'Apple App',
              slug: 'manual/apple-apps',
            },
            {
              label: '跨产品工作流',
              slug: 'manual/workflows',
            },
            {
              label: '术语表',
              slug: 'manual/glossary',
            },
            {
              label: '相关链接',
              slug: 'manual/links',
            },
          ],
        },
        {
          label: '产品说明归档',
          items: [
            {
              label: 'Product Overview',
              slug: 'projects/commercial-overview',
            },
            {
              label: 'SaaS Operating Model',
              slug: 'projects/saas-operating-model',
            },
            {
              label: 'Feature Matrix',
              slug: 'projects/feature-matrix',
            },
            {
              label: 'Roadmap',
              slug: 'projects/roadmap',
            },
            {
              label: 'Changelog',
              slug: 'projects/changelog',
            },
          ],
        },
        {
          label: '化学参考',
          items: [
            {
              label: 'Chemistry Notes',
              slug: 'chemistry',
            },
            {
              label: 'Reagent Passports',
              slug: 'reagents',
            },
            {
              label: 'Lab Guides',
              slug: 'lab-guides',
            },
            {
              label: 'Downloads',
              slug: 'downloads',
            },
            {
              label: 'CHEM10712',
              slug: 'uom-chemistry/chem10712',
            },
          ],
        },
        {
          label: 'Launch ChemVault',
          link: 'https://chemvault.science',
          attrs: {
            target: '_blank',
            rel: 'noreferrer',
          },
        },
        {
          label: 'Launch Extract',
          link: 'https://app.chemvault.science',
          attrs: {
            target: '_blank',
            rel: 'noreferrer',
          },
        },
        {
          label: 'User Center',
          link: 'https://user.chemvault.science',
          attrs: {
            target: '_blank',
            rel: 'noreferrer',
          },
        },
      ],
    }),
  ],
});
