import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ConsentAnalytics } from "@/components/consent-analytics";
import { SiteShell } from "@/components/site-shell";
import { SITE_NAME, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ReStory: Chill Electronics Repairs Wiki & Guides", template: `%s | ${SITE_NAME}` },
  description: "Practical guides for repairing, cleaning, selling and progressing in ReStory: Chill Electronics Repairs.",
  applicationName: SITE_NAME,
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    other: [{ rel: "mask-icon", url: "/icon.svg", color: "#e64c3e" }]
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: "/images/restory/official-header.jpg", width: 460, height: 215, alt: "ReStory official key art" }]
  },
  twitter: { card: "summary_large_image", images: ["/images/restory/official-header.jpg"] }
};

export const viewport: Viewport = { themeColor: "#e64c3e", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell><ConsentAnalytics /></body></html>;
}
