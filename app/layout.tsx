import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ConsentAnalytics } from "@/components/consent-analytics";
import { SiteShell } from "@/components/site-shell";
import { SITE_NAME, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ReStory: Chill Electronics Repairs Wiki & Guides", template: `%s | ${SITE_NAME}` },
  description: "Evidence-labeled guides for ReStory: Chill Electronics Repairs.",
  applicationName: SITE_NAME,
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    other: [{ rel: "mask-icon", url: "/icon.svg", color: "#6be6c1" }]
  },
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US" },
  twitter: { card: "summary" }
};

export const viewport: Viewport = { themeColor: "#0b1425", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell><ConsentAnalytics /></body></html>;
}
