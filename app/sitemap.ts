import type { MetadataRoute } from "next";
import { absoluteUrl, pages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.filter((page) => page.index).map((page) => ({ url: absoluteUrl(page.path), lastModified: new Date("2026-08-13T00:00:00Z"), changeFrequency: page.path === "/" ? "daily" : "weekly", priority: page.path === "/" ? 1 : page.path === "/guides/" ? 0.9 : 0.7 }));
}
