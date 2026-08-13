# Desktop and mobile browser QA

QA time: 2026-08-13 (Asia/Shanghai)  
Target: refreshed production build served locally on `127.0.0.1:3100`.

## Desktop

- Full-page homepage screenshot: `qa-desktop-home-2026-08-13.png`.
- Header, hero, official Steam artwork, official gameplay screenshots, task content, source labels, related links and footer render correctly.
- Chrome accessibility snapshot contains the expected primary navigation, one H1, official-fact table, sources and task links.
- No consent UI or analytics request appears because no production measurement ID is configured locally.

## Mobile

- Viewport: 390 × 844.
- Viewport screenshot checked during the refresh run; the earlier full-page reference remains `qa-mobile-home-2026-08-13.png`.
- One H1, meaningful body content, no Next error overlay and document-level horizontal overflow = 0 px.
- Wide fact table remains inside its intentionally scrollable table wrapper.
- Mobile navigation retains the two primary launch actions; footer and all trust/legal links remain reachable.

## Representative routes and interaction

- `/guides/beginners/`, `/guides/cleaning-and-reassembly/`, `/guides/how-to-sell-devices/`, `/guides/firmware-and-customization/` and `/guides/troubleshooting/`: one H1, index/follow, no horizontal overflow and no broken loaded image.
- `/privacy/`: one H1, `noindex` robots meta present, overflow 0.
- Unknown route: HTTP 404, custom “That part is not on the bench” content, one H1, overflow 0, no error overlay.
- Blocked operational/editorial phrase scan returned zero visible matches on every representative route.

## Runtime result

- Site-origin console warnings/errors: 0.
- Browser page errors: 0. The only browser log came from the user's Immersive Translate extension and was unrelated to the site.
- Unresolved warnings/errors: 0.
- Result: **passed**.
