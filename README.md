# ChemVault Docs

ChemVault Docs is the public documentation and knowledge library for the ChemVault ecosystem. It is built with Astro and Starlight and currently hosts chemistry notes, reagent references, project manuals, and CHEM10712 course knowledge points.

## Local Development

```sh
npm install
npm run dev
```

The dev server defaults to `http://localhost:4321/`.

## Production Checks

```sh
npm run build
npm run preview
```

`npm run build` generates the static site in `dist/` and builds the Pagefind search index used by Starlight.

## Content Layout

- `src/content/docs/index.mdx` - custom Docs homepage.
- `src/content/docs/getting-started/` - ChemVault ecosystem overview.
- `src/content/docs/chemistry/` - chemistry concept notes.
- `src/content/docs/reagents/` - reagent passports.
- `src/content/docs/projects/` - ChemVault project manuals.
- `src/content/docs/UoM Chemistry/` - course notes imported into Starlight routes.

## Theme

The ChemVault visual layer lives in `src/styles/custom.css` and is loaded through `astro.config.mjs`.
