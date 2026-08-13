import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, ".next", "server", "app");
const origin = "https://restory-chillelectronicsrepairs.wiki";
const routes = [
  "/", "/guides/", "/guides/beginners/", "/guides/cleaning-and-reassembly/",
  "/guides/how-to-sell-devices/", "/guides/firmware-and-customization/", "/achievements/",
  "/guides/legend-of-akiba/", "/story/endings/", "/devices/", "/game-info/", "/faq/",
  "/about/", "/contact/", "/privacy/", "/terms/", "/cookies/", "/disclaimer/"
];
const noindex = new Set(["/privacy/", "/terms/", "/cookies/", "/disclaimer/"]);
const approved = new Set(routes);
const errors = [];

const fileFor = (route) => route === "/" ? join(output, "index.html") : join(output, `${route.slice(1, -1)}.html`);
const count = (text, regex) => [...text.matchAll(regex)].length;

for (const route of routes) {
  const file = fileFor(route);
  if (!existsSync(file)) {
    errors.push(`${route}: missing rendered HTML`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  if (count(html, /<h1(?:\s|>)/g) !== 1) errors.push(`${route}: expected exactly one H1`);
  const canonical = `${origin}${route}`;
  if (!html.includes(`<link rel="canonical" href="${canonical}"`)) errors.push(`${route}: canonical mismatch`);
  if (!html.includes('<script type="application/ld+json">')) errors.push(`${route}: JSON-LD missing`);
  const expectsNoindex = noindex.has(route);
  const hasNoindex = /<meta name="robots" content="[^"]*noindex/.test(html);
  if (expectsNoindex !== hasNoindex) errors.push(`${route}: robots indexation mismatch`);

  for (const match of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const path = href.split(/[?#]/)[0];
    const normalized = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
    if (!approved.has(normalized)) errors.push(`${route}: broken or unapproved internal link ${href}`);
  }
}

const robots = readFileSync(join(output, "robots.txt.body"), "utf8");
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`) || robots.includes(`${origin}/sitemap.xml/`)) errors.push("robots.txt: exact sitemap URL mismatch");

const sitemap = readFileSync(join(output, "sitemap.xml.body"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemap = routes.filter((route) => !noindex.has(route)).map((route) => `${origin}${route}`);
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedSitemap)) errors.push("sitemap.xml: route inventory or order mismatch");

if (errors.length) {
  console.error(`Static QA failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Static QA passed: ${routes.length} routes, ${expectedSitemap.length} sitemap URLs, one H1/canonical/JSON-LD per route, no broken internal links.`);
