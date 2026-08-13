# Deterministic build QA

Commands:

- `npm run qa:content`
- `npm run verify-icons`
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `npm run qa:static`

Validated inventory:

- 19 approved site routes rendered as static HTML.
- 13 approved indexable canonical URLs in `sitemap.xml`.
- About, contact and four legal pages are `noindex, follow` and absent from the sitemap.
- Exactly one H1 and canonical per route.
- JSON-LD is present per route; types are generated according to visible content.
- `robots.txt` declares `https://restory-chillelectronicsrepairs.wiki/sitemap.xml` with no trailing slash.
- All rendered internal anchor targets belong to the approved route inventory.
- SVG icon verification, ESLint, strict TypeScript and production build pass.
- Keyword validation covers 636 preserved source positions, 46 canonical keywords and 16 intent categories.
- Source-manifest validation covers five current public links.
- User-facing source scan found none of the blocked operational or editorial phrases.
