# Desktop and mobile browser QA

QA time: 2026-08-13 (Asia/Shanghai)  
Target: production build served locally on `127.0.0.1:4317`.

## Desktop

- Full-page homepage screenshot: `qa-desktop-home-2026-08-13.png`.
- Header, hero, workbench illustration, task content, source labels, related links and footer render correctly.
- Chrome accessibility snapshot contains the expected primary navigation, one H1, official-fact table, sources and task links.
- No consent UI or analytics request appears because no production measurement ID is configured locally.

## Mobile

- Viewport: 390 × 844.
- Full-page homepage screenshot: `qa-mobile-home-2026-08-13.png`.
- One H1, meaningful body content, no Next error overlay and document-level horizontal overflow = 0 px.
- Wide fact table remains inside its intentionally scrollable table wrapper.
- Mobile navigation retains the two primary launch actions; footer and all trust/legal links remain reachable.

## Representative routes and interaction

- `/achievements/`: one H1, exactly 50 rendered achievement cards, overflow 0, no error overlay.
- `/privacy/`: one H1, `noindex` robots meta present, overflow 0.
- Unknown route: HTTP 404, custom “That part is not on the bench” content, one H1, overflow 0, no error overlay.
- Custom 404 “Browse verified guides” link was clicked and navigated to `/guides/` with the correct page title.

## Runtime result

- Browser console messages: 0.
- Browser page errors: 0.
- Unresolved warnings/errors: 0.
- Result: **passed**.
