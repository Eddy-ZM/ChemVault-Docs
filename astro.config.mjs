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
        'The ChemVault documentation library for chemistry notes, reagent passports, lab guides, project docs and file resources.',
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
          href: 'https://github.com/Eddy-ZM/ChemVault-Docs',
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
            {
              label: 'Study Workflow',
              slug: 'getting-started/study-workflow',
            },
          ],
        },
        {
          label: 'Knowledge Library',
          items: [
            {
              label: 'Chemistry Notes',
              items: [
                {
                  label: 'Overview',
                  slug: 'chemistry',
                },
                {
                  label: 'Substitution and Elimination Map',
                  slug: 'chemistry/substitution-elimination-map',
                },
                {
                  label: 'Reaction Troubleshooting',
                  slug: 'chemistry/reaction-troubleshooting',
                },
                {
                  label: 'SN1 Reaction',
                  slug: 'chemistry/sn1',
                },
                {
                  label: 'SN2 Reaction',
                  slug: 'chemistry/sn2',
                },
                {
                  label: 'E1 and E2 Elimination',
                  slug: 'chemistry/e1-e2',
                },
                {
                  label: 'Carbonyl Reductions',
                  slug: 'chemistry/carbonyl-reductions',
                },
              ],
            },
            {
              label: 'Reagent Passports',
              items: [
                {
                  label: 'Overview',
                  slug: 'reagents',
                },
                {
                  label: 'Reagent Selection Map',
                  slug: 'reagents/reagent-selection-map',
                },
                {
                  label: 'Sodium Borohydride',
                  slug: 'reagents/nabh4',
                },
                {
                  label: 'Lithium Aluminium Hydride',
                  slug: 'reagents/lialh4',
                },
                {
                  label: 'PCC',
                  slug: 'reagents/pcc',
                },
              ],
            },
            {
              label: 'Lab Guides',
              items: [
                {
                  label: 'Overview',
                  slug: 'lab-guides',
                },
                {
                  label: 'TLC Reaction Monitoring',
                  slug: 'lab-guides/tlc-monitoring',
                },
                {
                  label: 'Work-up and Extraction',
                  slug: 'lab-guides/workup-extraction',
                },
              ],
            },
            {
              label: 'File Library',
              items: [
                {
                  label: 'Overview',
                  slug: 'downloads',
                },
                {
                  label: 'File Library Plan',
                  slug: 'downloads/file-library-plan',
                },
              ],
            },
          ],
        },
        {
          label: 'Project Manuals',
          items: [
            {
              label: 'Overview',
              slug: 'projects',
            },
            {
              label: 'ChemVault Core',
              slug: 'projects/chemvault-core',
            },
            {
              label: 'ChemVault Mail',
              slug: 'projects/chemvault-mail',
            },
            {
              label: 'Docs Maintenance',
              slug: 'projects/chemvault-docs-maintenance',
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
