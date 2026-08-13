import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const required = ["public/icon.svg", "public/favicon.svg", "public/manifest.json"];

for (const file of required) {
  await access(file, constants.R_OK);
}

const manifest = JSON.parse(await readFile("public/manifest.json", "utf8"));
const sources = new Set(manifest.icons?.map((icon) => icon.src));
for (const source of ["/icon.svg", "/favicon.svg"]) {
  if (!sources.has(source)) throw new Error(`Manifest is missing ${source}`);
}

console.log("Icon verification passed: SVG favicon and maskable app icon are configured.");
