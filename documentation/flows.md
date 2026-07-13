# Critical Flows

| Flow | Actor/precondition | Sequence | Failure/deny |
| --- | --- | --- | --- |
| Read manual | Public visitor | Static route → product guide → canonical product link | Link must target current authority, especially Lab not Extract |
| Publish content | Product owner/contributor | Edit reviewed public content, validate links/contracts/build, merge | Internal/private paths and unresolved merge markers block release |
| Publish integration contract | Service owner approval | Version schema/semantics, document compatibility and migration | Breaking change requires explicit version/migration; docs alone do not deploy code |

Docs never grant product access and never proxy private user/service data.
