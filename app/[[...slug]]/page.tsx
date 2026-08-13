import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/components/content-renderer";
import { absoluteUrl, normalizePath, pageByPath, pages, SITE_NAME, SITE_URL, UPDATED } from "@/lib/site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.path === "/" ? [] : page.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pageByPath.get(normalizePath(slug));
  if (!page) return {};
  const canonical = absoluteUrl(page.path);
  return {
    title: page.path === "/" ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical },
    robots: page.index ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: { title: page.title, description: page.description, url: canonical, type: page.path === "/" ? "website" : "article", siteName: SITE_NAME },
    twitter: { card: "summary", title: page.title, description: page.description }
  };
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params;
  const page = pageByPath.get(normalizePath(slug));
  if (!page) notFound();

  const breadcrumbs = page.path.split("/").filter(Boolean).map((segment, index, all) => ({
    "@type": "ListItem",
    position: index + 2,
    name: segment.replaceAll("-", " "),
    item: `${SITE_URL}/${all.slice(0, index + 1).join("/")}/`
  }));
  const graph: Record<string, unknown>[] = [
    { "@type": "WebPage", "@id": absoluteUrl(page.path), url: absoluteUrl(page.path), name: page.title, description: page.description, dateModified: "2026-08-13", isPartOf: { "@id": `${SITE_URL}/#website` } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, ...breadcrumbs] }
  ];
  if (page.path === "/") graph.push({ "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME, inLanguage: "en" }, { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/`, logo: `${SITE_URL}/icon.svg` });
  if (page.faq) graph.push({ "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) });
  if (page.path.startsWith("/guides/") || page.path === "/achievements/" || page.path.startsWith("/story/")) graph.push({ "@type": "Article", headline: page.title, description: page.description, datePublished: "2026-08-13", dateModified: "2026-08-13", author: { "@id": `${SITE_URL}/#organization` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: absoluteUrl(page.path) });

  return <><ContentRenderer page={page} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }} /><span className="sr-only">Content checked {UPDATED}</span></>;
}
