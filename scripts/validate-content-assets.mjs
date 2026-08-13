import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));

const home = readJson("content/site-home.json");
const keywords = readJson("content/keywords.json");
const disposition = readJson("research/keyword-disposition.json");
const sources = readJson("research/site-source-manifest.json");
const topic = "restory chill electronics repairs";

const length = (value) => [...String(value)].length;
if (length(home.home.meta.title) > 60) errors.push("homepage title exceeds 60 characters");
if (length(home.home.meta.description) < 140 || length(home.home.meta.description) > 160) errors.push("homepage description must be 140-160 characters");
if (home.home.hero.stats.length < 4 || home.home.hero.stats.length > 5) errors.push("homepage hero must have 4-5 stats");
if (home.home.start.cards.length !== 4) errors.push("homepage must have exactly four start cards");
if (home.home.sidebarCodes.length !== 2) errors.push("homepage must have exactly two code placeholders");
if (length(home.metadata.keywords) > 100) errors.push("homepage metadata keywords exceed 100 characters");

if (keywords.categories.length < 10 || keywords.categories.length > 20) errors.push("keywords.json must have 10-20 categories");
if (!keywords.categories.some((item) => item.category === "guide")) errors.push("keywords.json is missing guide category");
const canonicalKeywords = keywords.categories.flatMap((item) => item.keywords);
if (new Set(canonicalKeywords).size !== canonicalKeywords.length) errors.push("canonical keyword appears more than once");
for (const keyword of canonicalKeywords) if (!keyword.startsWith(topic)) errors.push(`keyword does not start with official topic: ${keyword}`);

if (disposition.rows.length !== disposition.summary.raw_rows || disposition.rows.length !== disposition.summary.disposed_rows) errors.push("disposition row count mismatch");
for (let index = 0; index < disposition.rows.length; index += 1) {
  const row = disposition.rows[index];
  if (row.source_position !== index + 1) errors.push(`invalid source position at row ${index + 1}`);
  if (["kept", "merged", "translated", "corrected"].includes(row.disposition) && !canonicalKeywords.includes(row.canonical_keyword)) errors.push(`row ${index + 1} points to a missing canonical keyword`);
}
for (const keyword of canonicalKeywords) if (!disposition.rows.some((row) => row.canonical_keyword === keyword)) errors.push(`canonical keyword lacks a raw source row: ${keyword}`);

for (const source of sources.sources) if (source.status !== "200-identity-matched") errors.push(`source not checked successfully: ${source.id}`);

const publicFiles = ["components/content-renderer.tsx", "components/site-shell.tsx", "app/layout.tsx", "app/not-found.tsx", "lib/site-data.ts"];
const publicText = publicFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n");
for (const phrase of ["SOURCE CODE", "No invented answers", "evidence gate", "verified routes", "Sources & update boundary", "Evidence note", "watch items", "release-week observations"]) {
  if (publicText.includes(phrase)) errors.push(`player-visible internal phrase remains: ${phrase}`);
}

if (errors.length) {
  console.error(`Content asset validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Content assets passed: ${keywords.categories.length} categories, ${canonicalKeywords.length} canonical keywords, ${disposition.rows.length} disposed raw positions, ${sources.sources.length} checked public sources.`);
