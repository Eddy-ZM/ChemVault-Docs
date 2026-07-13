# Verification Map

## Existing coverage

| Use case | Rule/negative case | Evidence/status |
| --- | --- | --- |
| Static build/content | Starlight/Astro content compiles | production build; CI required |
| Contract/manual hygiene | Merge markers and known private/internal references rejected | validation workflow/scripts |
| Product map | Canonical suite integration and Lab-centered navigation are versioned | content review and build |

## Proposed tests

- Automated external-link and canonical-domain validation.
- Generated-output secret/local-path/private-material scan.
- Contract version/reference checker against owning repositories.

## Gaps

- Product owners must still approve accuracy; a successful static build cannot prove deployed product behavior.
- External link availability and old Extract-link traffic require periodic live checks.
