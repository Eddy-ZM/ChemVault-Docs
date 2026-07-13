# Runtime Variables

| Name/group | Scope/source | Use/failure |
| --- | --- | --- |
| Site origin/base path | Public build config | Canonical URLs/sitemap; wrong value breaks SEO/navigation |
| Public product URLs | Versioned content/config | Cross-product navigation; stale value misroutes users |
| Build/deploy credentials | CI secret if deployment uses them | Never included in Starlight output |

No application secret or private API is required. Before publish, scan generated output for credentials, local drive paths, private-material names, draft domains, and unresolved merge markers.
