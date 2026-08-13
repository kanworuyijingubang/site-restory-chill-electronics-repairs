import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = process.cwd();
const topic = "restory chill electronics repairs";

const categoryCatalog = [
  ["guide", [
    `${topic} guide`,
    `${topic} walkthrough`,
    `${topic} wiki`,
    `${topic} gameplay`
  ]],
  ["repair-and-reassembly", [
    `${topic} reassembly`,
    `${topic} what is missing`
  ]],
  ["cleaning", [
    `${topic} cleaning guide`,
    `${topic} cleanliness rating`
  ]],
  ["selling-and-shop", [
    `${topic} how to sell`,
    `${topic} marketplace guide`
  ]],
  ["firmware-and-reprogramming", [
    `${topic} firmware`,
    `${topic} firmware not working`,
    `${topic} guitar firmware not working`
  ]],
  ["customization-and-mods", [
    `${topic} customization`,
    `${topic} mods`,
    `${topic} fan art`
  ]],
  ["achievements", [
    `${topic} achievements`
  ]],
  ["challenges-and-competition", [
    `${topic} challenge guide`,
    `${topic} competition guide`
  ]],
  ["story-and-endings", [
    `${topic} endings`,
    `${topic} story`,
    `${topic} hashimoto`,
    `${topic} hirohi`
  ]],
  ["devices-and-licenses", [
    `${topic} devices`,
    `${topic} nony pmp license`,
    `${topic} device specifications`,
    `${topic} banana barrel`
  ]],
  ["platform-and-purchase", [
    `${topic} steam`,
    `${topic} price`,
    `${topic} release date`,
    `${topic} system requirements`,
    `${topic} switch`,
    `${topic} ps5`,
    `${topic} vr`,
    `${topic} steam deck`
  ]],
  ["demo-and-save", [
    `${topic} demo`,
    `${topic} demo save transfer`
  ]],
  ["troubleshooting", [
    `${topic} troubleshooting`,
    `${topic} cleaning not working`,
    `${topic} story not progressing`,
    `${topic} performance issues`
  ]],
  ["playtime-and-completion", [
    `${topic} how long to beat`
  ]],
  ["similar-games", [
    `${topic} similar games`
  ]],
  ["developer-and-media", [
    `${topic} developer`,
    `${topic} press kit`,
    `${topic} logo`,
    `${topic} ai assets`,
    `${topic} y2k`
  ]],
  ["codes", [
    `${topic} codes`
  ]]
];

const categoryFor = new Map();
for (const [category, keywords] of categoryCatalog) {
  for (const keyword of keywords) categoryFor.set(keyword, category);
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/:/g, "")
    .replace(/\belectronic repair\b/g, "electronics repairs")
    .replace(/\belectronic repairs\b/g, "electronics repairs")
    .replace(/\belectronics repair\b/g, "electronics repairs")
    .replace(/\s+/g, " ")
    .replace(/[|!"“”]+$/g, "")
    .trim();
}

function canonicalize(raw) {
  const value = normalize(raw);
  const hasTopic = value.includes("restory") || value.includes("re story") || value.includes("chill electronics");

  if (/torrent|crack|trainer|cheat engine|steam unlocked|pivigames|steam rip|skidrow|elamigos|iggame|igg\b|game3rb|byrut|repack|пират|торрент|free download|download free|descargar|скачать|下载|baixe|apk|android|nude mod|adult mod/.test(value)) {
    return { disposition: "filtered_unsafe", reason: "Piracy, cheat, unsafe download, or adult-mod intent is outside the site contract." };
  }

  if (!hasTopic && !/electronics repair simulator|electronics repair games|cozy repair games|retro repair shop game|phone repair shop game|similar game like restory|game about repairing electronics|game with tiny tech repair shop/.test(value)) {
    return { disposition: "filtered_irrelevant", reason: "The query is a different game, a real-world repair service, or an unrelated broad term." };
  }

  if (/^(restory|re story|re-story|restory game|game restory|restory chill|chill electronics repairs|restory chill electronics repairs game|restory chill electronics repairs full game)$/.test(value)) {
    return { disposition: "filtered_core", reason: "Bare entity query is served by the homepage and is not duplicated in the keyword taxonomy." };
  }

  let canonical;
  if (/\bcodes?\b/.test(value)) canonical = `${topic} codes`;
  else if (/demo.*(save|continue)|save.*demo|continue.*demo/.test(value)) canonical = `${topic} demo save transfer`;
  else if (/\bdemo\b/.test(value)) canonical = `${topic} demo`;
  else if (/how long|hltb|play ?time/.test(value)) canonical = `${topic} how long to beat`;
  else if (/games like|similar game|cozy repair games|electronics repair simulator|electronics repair games|retro repair shop game|phone repair shop game|game about repairing electronics|game with tiny tech repair shop/.test(value)) canonical = `${topic} similar games`;
  else if (/clean.*not working|cant clean|can't clean/.test(value)) canonical = `${topic} cleaning not working`;
  else if (/story.*(stuck|not progress)|plot not moving|progress.*stuck|stuck on first day/.test(value)) canonical = `${topic} story not progressing`;
  else if (/freeze|crash|lag|stutter|low fps|performance|memory leak/.test(value)) canonical = `${topic} performance issues`;
  else if (/steam deck/.test(value)) canonical = `${topic} steam deck`;
  else if (/troubleshoot|not working/.test(value) && !/firmware|guitar/.test(value)) canonical = `${topic} troubleshooting`;
  else if (/guitar.*firmware/.test(value)) canonical = `${topic} guitar firmware not working`;
  else if (/firmware.*(cant|cannot|not working)|cant update firmware/.test(value)) canonical = `${topic} firmware not working`;
  else if (/firmware|reprogram|unlock.?toolkit/.test(value)) canonical = `${topic} firmware`;
  else if (/what ?is missing|whatis missing|missing part/.test(value)) canonical = `${topic} what is missing`;
  else if (/reassembl/.test(value)) canonical = `${topic} reassembly`;
  else if (/cleanliness rating/.test(value)) canonical = `${topic} cleanliness rating`;
  else if (/\bclean(ing)?\b/.test(value)) canonical = `${topic} cleaning guide`;
  else if (/how to sell|sell device/.test(value)) canonical = `${topic} how to sell`;
  else if (/marketplace/.test(value)) canonical = `${topic} marketplace guide`;
  else if (/customize display|customization|paint|palette|sticker|no pinta/.test(value)) canonical = `${topic} customization`;
  else if (/\bmods?\b/.test(value)) canonical = `${topic} mods`;
  else if (/fan ?art/.test(value)) canonical = `${topic} fan art`;
  else if (/achievement/.test(value)) canonical = `${topic} achievements`;
  else if (/atary|atari.*challenge|challenge guide|legend of akiba/.test(value)) canonical = `${topic} challenge guide`;
  else if (/competition/.test(value)) canonical = `${topic} competition guide`;
  else if (/ending/.test(value)) canonical = `${topic} endings`;
  else if (/hashimoto/.test(value)) canonical = `${topic} hashimoto`;
  else if (/hirohi/.test(value)) canonical = `${topic} hirohi`;
  else if (/\bstory\b|故事/.test(value)) canonical = `${topic} story`;
  else if (/nony pmp.*license/.test(value)) canonical = `${topic} nony pmp license`;
  else if (/banana barrel/.test(value)) canonical = `${topic} banana barrel`;
  else if (/device specific/.test(value)) canonical = `${topic} device specifications`;
  else if (/\bdevices?\b|\bgadgets?\b|\bidm\b/.test(value)) canonical = `${topic} devices`;
  else if (/\bswitch\b/.test(value)) canonical = `${topic} switch`;
  else if (/\bps5\b|playstation/.test(value)) canonical = `${topic} ps5`;
  else if (/\bvr\b/.test(value)) canonical = `${topic} vr`;
  else if (/requirements|requisitos/.test(value)) canonical = `${topic} system requirements`;
  else if (/release ?date|releasdate|hora lanzamiento/.test(value)) canonical = `${topic} release date`;
  else if (/\bprice\b|precio|ราคา|instant gaming|g2a|steam key|\bkey\b/.test(value)) canonical = `${topic} price`;
  else if (/\bsteam\b|download/.test(value)) canonical = `${topic} steam`;
  else if (/\bwiki\b/.test(value)) canonical = `${topic} wiki`;
  else if (/walkthrough|walth/.test(value)) canonical = `${topic} walkthrough`;
  else if (/gameplay/.test(value)) canonical = `${topic} gameplay`;
  else if (/\bguide\b/.test(value)) canonical = `${topic} guide`;
  else if (/press ?kit|pr email/.test(value)) canonical = `${topic} press kit`;
  else if (/\blogo\b/.test(value)) canonical = `${topic} logo`;
  else if (/\bai\b|coded with ai|made with ai/.test(value)) canonical = `${topic} ai assets`;
  else if (/\by2k\b/.test(value)) canonical = `${topic} y2k`;
  else if (/country|creator|developer|mandragora|eugene kisterev|website/.test(value)) canonical = `${topic} developer`;

  if (!canonical || !categoryFor.has(canonical)) {
    return { disposition: "filtered_irrelevant", reason: "The captured string is malformed, too broad, or lacks a distinct ReStory search task." };
  }

  const nonEnglish = /[^\x00-\x7F]/.test(raw);
  const typo = /whatis|atary|releasdate|reatory|reapir|eletronic|specificatioms|crfxfn|restorychill|repair\. y/.test(value);
  const disposition = nonEnglish ? "translated" : typo ? "corrected" : value === canonical ? "kept" : "merged";
  return { disposition, canonical_keyword: canonical, category: categoryFor.get(canonical), reason: "Mapped to the canonical keyword that preserves this search intent without creating a duplicate URL." };
}

function readAutosuggest() {
  const encoded = fs.readFileSync(path.join(root, "research", "google-autosuggest-2026-08-13.json.gz.b64"), "utf8").replace(/\s/g, "");
  const payload = JSON.parse(zlib.gunzipSync(Buffer.from(encoded, "base64")).toString("utf8"));
  return payload.observations
    .filter((item) => item.raw_text)
    .map((item, index) => ({
      source: "google-autosuggest",
      source_position: `google-autosuggest:${index + 1}`,
      raw_keyword: item.raw_text,
      source_observation_ids: [`google-autosuggest:${item.query}:${item.position}`]
    }));
}

function readSimilarweb(tab) {
  const file = path.join(root, "research", `similarweb-${tab}-2026-08-13.txt`);
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).map((line) => line.trim());
  const start = lines.indexOf("100") + 1;
  const end = lines.findIndex((line, index) => index > start && /^\d+(?:\.\d+)?[KMB]$/.test(line));
  const translationNoise = new Set([
    "故事：冷酷电子产品维修",
    "重新讲述寒冷电子产品维修",
    "故事：冷电子产品维修",
    "故事：电子产品维修价格低廉"
  ]);
  return lines.slice(start, end)
    .filter((line) => line && !translationNoise.has(line))
    .map((raw_keyword, index) => ({
      source: `similarweb-${tab}`,
      source_position: `similarweb-${tab}:${index + 1}`,
      raw_keyword,
      source_observation_ids: [`similarweb-${tab}:${index + 1}`]
    }));
}

function readCommunityKeywords() {
  const payload = JSON.parse(fs.readFileSync(path.join(root, "research", "update-community-keywords-2026-08-13.json"), "utf8"));
  return payload.observations.map((item, index) => ({
    source: "steam-community-update",
    source_position: `steam-community-update:${index + 1}`,
    raw_keyword: item.raw_text,
    source_observation_ids: [`steam-community-update:${index + 1}`]
  }));
}

const observations = [
  ...readAutosuggest(),
  ...readSimilarweb("phrase"),
  ...readSimilarweb("related"),
  ...readSimilarweb("questions"),
  ...readCommunityKeywords()
];

const rows = observations.map((observation, index) => ({
  source_position: index + 1,
  source_key: observation.source_position,
  source: observation.source,
  raw_keyword: observation.raw_keyword,
  ...canonicalize(observation.raw_keyword),
  source_observation_ids: observation.source_observation_ids
}));

const backed = new Set(rows.filter((row) => row.canonical_keyword).map((row) => row.canonical_keyword));
const categories = categoryCatalog
  .map(([category, keywords]) => ({ category, keywords: keywords.filter((keyword) => backed.has(keyword)) }))
  .filter((group) => group.keywords.length > 0);

const flattened = categories.flatMap((group) => group.keywords);
if (categories.length < 10 || categories.length > 20) throw new Error(`Expected 10-20 categories, got ${categories.length}`);
if (!categories.some((group) => group.category === "guide")) throw new Error("Missing guide category");
if (new Set(flattened).size !== flattened.length) throw new Error("Canonical keyword appears in multiple categories");
if (flattened.some((keyword) => !rows.some((row) => row.canonical_keyword === keyword))) throw new Error("Canonical keyword lacks a raw source row");

const keywords = { categories };
const disposition = {
  schema_version: "keyword-disposition-v1",
  topic,
  source_artifact_id: "google-autosuggest-and-similarweb-2026-08-13",
  rows,
  summary: {
    raw_rows: rows.length,
    disposed_rows: rows.length,
    category_count: categories.length,
    final_canonical_keywords: flattened.length,
    approved_unique_page_intents: 13,
    source_rows: Object.fromEntries([...new Set(rows.map((row) => row.source))].map((source) => [source, rows.filter((row) => row.source === source).length]))
  }
};

fs.writeFileSync(path.join(root, "content", "keywords.json"), `${JSON.stringify(keywords, null, 2)}\n`);
fs.writeFileSync(path.join(root, "research", "keyword-disposition.json"), `${JSON.stringify(disposition, null, 2)}\n`);

const materials = `# ReStory keyword materials — 2026-08-13\n\n` +
  `- Operator: game-seo-operator 2.2.0\n` +
  `- Workflow: site-launch-workflow 2.2.0\n` +
  `- Content contract: site-content-delivery 1.1.0\n` +
  `- Raw rows disposed: ${rows.length}\n` +
  `- Canonical keywords: ${flattened.length}\n` +
  `- Mutually exclusive categories: ${categories.length}\n\n` +
  `## Source boundary\n\n` +
  `Google Autosuggest preserved ${rows.filter((row) => row.source === "google-autosuggest").length} non-empty raw positions. Similarweb displayed totals of 170 Phrase Match, 182 Related, and 2 Questions, while the saved visible exports contain ${rows.filter((row) => row.source === "similarweb-phrase").length}, ${rows.filter((row) => row.source === "similarweb-related").length}, and ${rows.filter((row) => row.source === "similarweb-questions").length} keyword-like rows respectively. The Questions capture duplicates the Related capture and is retained as an independent source-position artifact rather than silently rewritten.\n\n` +
  `## Page decision\n\n` +
  `Canonical keywords are research assets, not automatic pages. Existing guide, repair, cleaning, selling, firmware, achievements, challenge, story, devices, and game-info routes absorb synonymous terms. This update adds one independently useful troubleshooting route. Playtime, demo-save, AI-assets, codes, ports, device-detail, and similar-games terms remain in the taxonomy but are not promoted to indexable pages without stronger current facts and a separate page contract.\n`;
fs.writeFileSync(path.join(root, "research", "keyword-materials.md"), materials);

console.log(JSON.stringify(disposition.summary, null, 2));
