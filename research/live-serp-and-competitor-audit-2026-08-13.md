# Live SERP and competitor audit

- Observed: 2026-08-13 (Asia/Shanghai)
- Market intent: English / United States, worldwide demand signals
- Search boundary: a live Google result page for the endings query was captured before Google presented an unusual-traffic CAPTCHA. No CAPTCHA was solved. Remaining candidates use the public web-search fallback and are marked as such.
- Third-party metrics from Similarweb and the SiteData browser extension are estimates, not first-party analytics.

## Priority query records

| Query | Live result pattern | Intent / gap |
| --- | --- | --- |
| `ReStory Chill Electronics Repairs` | Official Steam store, Steam Community, videos, new wikis | Entity / game overview; official facts should lead |
| `ReStory Chill Electronics Repairs guide` | Steam guides, video walkthroughs, new guide sites | Guide hub with concise task routing |
| `ReStory Chill Electronics Repairs firmware` | Weak exact-match coverage; noisy generic Steam firmware results | Explain the in-game reprogramming/customization unlocks only; do not publish generic PC/Steam firmware advice |
| `ReStory Chill Electronics Repairs achievements` | Official Steam global achievements and Steam community guides | Strong page: official 50-achievement list plus clearly marked community tips |
| `ReStory Chill Electronics Repairs Legend of Akiba` | Current Steam guides cover competition devices | Strong page: verified 29-device checklist and source links; avoid copying image sequences |
| `ReStory Chill Electronics Repairs endings` | Destructoid, Sportskeeda, Steam guide, TheGamer, newly registered wiki sites | High current demand but conflicting ending counts; publish only achievement-linked routes confirmed by Steam/community evidence and do not assert a total count |

Captured raw Google page: `google-serp-endings-2026-08-13.txt`.

## Competitor sitemap audit

### chillelectronicsrepairswiki.wiki

- `robots.txt`: crawl allowed; sitemap declared without a trailing slash.
- Sitemap: 256 URLs.
- Structure: one apex plus 63 English, 64 Japanese, 64 Russian and 64 Spanish URLs.
- Early families include guides, devices, tools, parts, customers, story and achievements.
- Risk observed: instant multilingual scale creates a freshness and factual-verification burden. This launch will not imitate it.

### restory.wiki

- Sitemap index points to one child sitemap.
- Child sitemap: 196 URLs.
- 195 URLs sit under `/w/`; many are `File:` and `Category:` pages.
- Human-facing content currently includes the game entity and device pages such as Autorolla Razor, Pokia 3310, Atari 2600, Atari CX40, Nony PMP and Eggotchi.
- Opportunity: task-completion pages can be more useful than an asset-heavy MediaWiki index.

## Launch decision

Publish a focused English MVP: home, guide hub, beginner flow, cleaning/reassembly, selling, firmware/customization, achievements, Legend of Akiba, endings, devices, game info and FAQ. Legal/support pages are included but are not a content-expansion substitute. Piracy, cracks, trainers, cheats, unsupported console/mobile claims and unverified ending counts are excluded.

