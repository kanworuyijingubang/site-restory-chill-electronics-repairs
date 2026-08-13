# ReStory Repair Desk — site architecture spec v1

## Positioning

For players starting the full release or stuck on a specific repair-shop task, ReStory Repair Desk provides short, source-labeled answers for cleaning, reassembly, selling, reprogramming/customization, achievements, Akiba competitions and ending choices. Unlike a generic asset wiki, every gameplay claim identifies whether it comes from official Steam data or version-sensitive community evidence, and unsupported platform/ending claims are explicitly withheld.

Target users:

- new full-release players learning the repair/shop loop;
- players stuck on cleaning, selling, firmware/reprogramming or customization;
- achievement hunters and Legend of Akiba competitors;
- players checking platforms, requirements, release facts or spoiler-safe routes.

Differentiators:

- official-first facts with visible evidence labels;
- current full-release boundary and updated-on dates;
- task completion before exhaustive encyclopedia coverage;
- no piracy, cheat, fabricated platform, total-ending or code claims;
- compact internal-link paths from symptom to answer.

## Information architecture

Primary navigation: Guides, Achievements, Devices, Game Info, FAQ.

| Route | Family | Intent | Index | Primary parent |
| --- | --- | --- | --- | --- |
| `/` | home | entity/navigation | index | — |
| `/guides/` | hub | route to a task | index | `/` |
| `/guides/beginners/` | guide | learn the core loop | index | `/guides/` |
| `/guides/cleaning-and-reassembly/` | guide | clean/find/reassemble | index | `/guides/` |
| `/guides/how-to-sell-devices/` | guide | marketplace/selling | index | `/guides/` |
| `/guides/firmware-and-customization/` | guide | reprogram/paint/stickers | index | `/guides/` |
| `/achievements/` | reference | all 50 achievements | index | `/` |
| `/guides/legend-of-akiba/` | checklist | 29-device competition set | index | `/guides/` |
| `/story/endings/` | spoiler guide | achievement-linked ending choices | index | `/` |
| `/devices/` | index | device/checklist reference | index | `/` |
| `/game-info/` | facts | release/platform/requirements/live price | index | `/` |
| `/faq/` | FAQ | short answers | index | `/` |
| `/about/`, `/contact/` | trust | ownership/contact | index | footer |
| `/privacy/`, `/terms/`, `/cookies/`, `/disclaimer/` | legal | policies | noindex | footer |

## URL and metadata contract

- English lowercase slugs; one canonical per search need.
- Production canonical host: `https://restory-chillelectronicsrepairs.wiki`.
- Canonical page URLs use a trailing slash.
- `robots.txt` declares `https://restory-chillelectronicsrepairs.wiki/sitemap.xml` exactly, without a trailing slash.
- Titles lead with the exact task and end with `ReStory Repair Desk` where length permits.
- Descriptions state the user outcome and the evidence/update boundary; avoid unverified counts.
- One H1 per page; answer-first intro; meaningful H2s; breadcrumb links.
- Article pages use `Article` + `BreadcrumbList`; FAQ uses `FAQPage`; home uses `WebSite` and `Organization`. No review/rating schema.

## Internal linking contract

- Every indexable page links to at least two sibling/next-step pages and one parent or hub.
- Home links to all P0 clusters; Guides links to every guide family.
- Cleaning links to beginner, achievements and Akiba.
- Selling links to beginner, achievements and game info.
- Firmware/customization links to achievements and FAQ.
- Achievements links to cleaning, selling, firmware/customization, Akiba and endings.
- Devices links to Akiba and cleaning.
- Endings links back to achievements and the spoiler-free guide hub.
- Footer exposes trust/legal routes; legal routes do not enter the content graph as authority pages.

## Page template contract

Each indexable content page requires:

1. metadata and canonical;
2. breadcrumb;
3. one-sentence direct answer or purpose;
4. `Updated Aug 13, 2026` and evidence badge;
5. scoped sections/checklists/tables matching the query;
6. source notes with outbound links and `rel="noopener noreferrer"`;
7. related-task links;
8. JSON-LD appropriate to the page type.

Guide claims must use `official`, `official achievement`, or `community-tested` evidence labels. Community-tested facts include a release-week boundary and are refreshed when Steam news or community contradictions appear.

## Visual system

- Mood: a warm Y2K repair counter after dark; dark navy workbench, warm amber task lights, mint status LEDs and muted coral warnings.
- Typography: local/system sans stack to avoid render-blocking font dependencies; bold condensed-feeling headings through weight/letter spacing.
- Layout: wide editorial cards, compact status chips, responsive two-column hero and single-column mobile flow.
- Avoid copyrighted game artwork in the initial build. Use original CSS/SVG circuit traces, screws, device silhouettes and toolbench motifs.
- Accessibility: visible focus, semantic headings, 44px minimum controls, WCAG-aware color contrast, reduced-motion support.

## Refresh and expansion gates

- Refresh official facts after a Steam store/news change.
- Refresh community guides when a patch contradicts a step or two independent current reports disagree.
- Do not create device-detail, character, multilingual, mod, platform-specific or additional ending-route families without a new approved dataset/template batch.
