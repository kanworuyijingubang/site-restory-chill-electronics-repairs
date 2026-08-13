# Deterministic build QA

Commands:

- `npm run verify-icons`
- `npm run lint`
- `npm run build`
- `npm run qa:static`

Validated inventory:

- 18 approved site routes rendered as static HTML.
- 14 approved indexable canonical URLs in `sitemap.xml`.
- Four legal pages are `noindex, follow` and absent from the sitemap.
- Exactly one H1 and canonical per route.
- JSON-LD is present per route; types are generated according to visible content.
- `robots.txt` declares `https://restory-chillelectronicsrepairs.wiki/sitemap.xml` with no trailing slash.
- All rendered internal anchor targets belong to the approved route inventory.
- SVG icon verification, ESLint, strict TypeScript and production build pass.
