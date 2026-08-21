import Link from "next/link";
import type { ReactNode } from "react";
import { AdSlot } from "@/components/ad-slot";
import { SITE_NAME } from "@/lib/site-data";

const nav = [
  ["Updates", "/updates/"],
  ["Guides", "/guides/"],
  ["Achievements", "/achievements/"],
  ["Devices", "/devices/"],
  ["Game info", "/game-info/"],
  ["FAQ", "/faq/"]
] as const;

export function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span className="logo-r">R</span>
      <span className="logo-screw">●</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={`${SITE_NAME} home`}>
          <LogoMark />
          <span><strong>ReStory</strong><small>Repair Desk</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="brand footer-brand"><LogoMark /><span><strong>ReStory</strong><small>Repair Desk</small></span></div>
          <p>Independent guides for repairing devices, growing your shop and finishing ReStory. Official game media is credited to its respective owners.</p>
        </div>
        <div><strong>Explore</strong><Link href="/updates/">Updates</Link><Link href="/guides/">Guides</Link><Link href="/achievements/">Achievements</Link><Link href="/devices/">Devices</Link></div>
        <div><strong>Trust</strong><Link href="/about/">About</Link><Link href="/contact/">Corrections</Link><Link href="/disclaimer/">Disclaimer</Link></div>
        <div><strong>Legal</strong><Link href="/privacy/">Privacy</Link><Link href="/cookies/">Cookies</Link><Link href="/terms/">Terms</Link></div>
      </div>
      <div className="footer-bottom">© 2026 ReStory Repair Desk. Unofficial fan resource. Trademarks belong to their respective owners.</div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><AdSlot /><SiteFooter /></>;
}
