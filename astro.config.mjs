import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.chemvault.science',
  integrations: [
    starlight({
      title: 'ChemVault Docs',
      description:
        'Chemistry notes, lab guides, reagent references and project documentation for ChemVault.',
	  customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Mu-Eddy',
        },
      ],
      sidebar: [
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
          label: 'Chemistry Notes',
          items: [
            {
              label: 'SN1 Reaction',
              slug: 'chemistry/sn1',
            },
          ],
        },
        {
          label: 'Reagent Library',
          items: [
            {
              label: 'Sodium Borohydride',
              slug: 'reagents/nabh4',
            },
          ],
        },
        {
          label: 'Projects',
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
      ],
    }),
  ],
});