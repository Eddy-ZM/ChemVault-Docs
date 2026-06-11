import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.chemvault.science',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: 'ChemVault Docs',
      description:
        'The ChemVault documentation library for chemistry notes, reagent passports, lab guides, project docs and file manuals.',
      logo: {
        src: './src/assets/chemvault-logo-mark.png',
        alt: 'ChemVault',
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#f5f5f7',
          },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Mu-Eddy',
        },
      ],
      sidebar: [
        {
          label: 'Docs Home',
          link: '/',
        },
        {
          label: 'Getting Started',
          items: [
            {
              label: 'What is ChemVault?',
              slug: 'getting-started/what-is-chemvault',
            },
          ],
        },
        {
          label: 'Knowledge Library',
          items: [
            {
              label: 'Chemistry Notes',
              slug: 'chemistry/sn1',
            },
            {
              label: 'Sodium Borohydride',
              slug: 'reagents/nabh4',
            },
          ],
        },
        {
          label: 'Project Manuals',
          items: [
            {
              label: 'ChemVault Core',
              slug: 'projects/chemvault-core',
            },
            {
              label: 'ChemVault Mail',
              slug: 'projects/chemvault-mail',
            },
          ],
        },
        {
          label: 'UoM Chemistry',
          collapsed: true,
          items: [
            {
              label: 'CHEM10712 Knowledge Index',
              slug: 'uom-chemistry/chem10712',
            },
            {
              label: 'CHEM10712 Slides Knowledge Notes',
              slug: 'uom-chemistry/chem10712/chem10712_slides_knowledge_notes_zh',
            },
            {
              label: 'CHEM10712 Knowledge Points',
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: 'uom-chemistry/chem10712_knowledge_points',
                    collapsed: true,
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'ChemVault Portal',
          link: 'https://chemvault.science',
          attrs: {
            target: '_blank',
            rel: 'noreferrer',
          },
        },
      ],
    }),
  ],
});
