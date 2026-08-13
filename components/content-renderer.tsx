import Link from "next/link";
import Image from "next/image";
import { achievementGroups, deviceGroups, pageByPath, type PageRecord, UPDATED } from "@/lib/site-data";

function Breadcrumbs({ path, title }: { path: string; title: string }) {
  const parts = path.split("/").filter(Boolean);
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link><span>/</span>
      {parts.length > 1 && <>{pageByPath.has(`/${parts[0]}/`) ? <Link href={`/${parts[0]}/`}>{parts[0].replaceAll("-", " ")}</Link> : <span>{parts[0].replaceAll("-", " ")}</span>}<span>/</span></>}
      <span aria-current="page">{title}</span>
    </nav>
  );
}

const mediaForPath = (path: string) => {
  if (path === "/") return { src: "/images/restory/screenshot-01.jpg", alt: "ReStory electronics repair shop and customer dialogue" };
  if (path.includes("cleaning") || path.includes("reassembly")) return { src: "/images/restory/screenshot-05.jpg", alt: "Disassembled device on the ReStory repair workbench" };
  if (path.includes("firmware") || path.includes("customization")) return { src: "/images/restory/screenshot-07.jpg", alt: "Custom-painted music player in ReStory" };
  if (path.includes("sell") || path.includes("market")) return { src: "/images/restory/screenshot-04.jpg", alt: "ReStory flea market for buying repairable electronics" };
  if (path.includes("solder") || path.includes("quiz")) return { src: "/images/restory/screenshot-03.jpg", alt: "Circuit board soldering repair in ReStory" };
  if (path.includes("device") || path.includes("akiba")) return { src: "/images/restory/screenshot-08.jpg", alt: "Handheld console disassembled on the ReStory workbench" };
  if (path.includes("achievement") || path.includes("story") || path.includes("ending")) return { src: "/images/restory/screenshot-06.jpg", alt: "Evening customer scene inside the ReStory repair shop" };
  return { src: "/images/restory/screenshot-02.jpg", alt: "Portable console being cleaned on the ReStory workbench" };
};

function HeroMedia({ path, home }: { path: string; home: boolean }) {
  const media = mediaForPath(path);
  return (
    <figure className={`hero-media ${home ? "home-media" : ""}`}>
      <div className="hero-shot">
        <Image src={media.src} alt={media.alt} fill priority={home} sizes="(max-width: 920px) 100vw, 48vw" />
      </div>
      {home && <Image className="hero-key-art" src="/images/restory/official-header.jpg" alt="ReStory official key art" width={460} height={215} />}
      <figcaption><span>Official game media</span> Source: Steam</figcaption>
    </figure>
  );
}

function GameGallery() {
  const items = [
    ["/images/restory/screenshot-02.jpg", "Clean and reassemble nostalgic handheld electronics"],
    ["/images/restory/screenshot-03.jpg", "Repair circuit boards with hands-on soldering"],
    ["/images/restory/screenshot-07.jpg", "Customize restored devices with paint and stickers"]
  ] as const;
  return (
    <section className="game-gallery" aria-labelledby="gameplay-gallery">
      <div className="section-kicker">Inside the repair shop</div>
      <h2 id="gameplay-gallery">Actual ReStory gameplay</h2>
      <div className="gallery-grid">
        {items.map(([src, alt]) => <figure key={src}><Image src={src} alt={alt} width={1920} height={1080} sizes="(max-width: 640px) 100vw, 33vw" /><figcaption>{alt}</figcaption></figure>)}
      </div>
      <p className="official-media-note">Official promotional screenshots sourced from the <a href="https://store.steampowered.com/app/3812600/ReStory_Chill_Electronics_Repairs/" target="_blank" rel="noopener noreferrer">ReStory Steam store</a>. ReStory and its artwork belong to their respective owners.</p>
    </section>
  );
}

function Section({ section }: { section: PageRecord["sections"][number] }) {
  return (
    <section className={`content-section tone-${section.tone ?? "default"}`}>
      <h2>{section.title}</h2>
      {section.intro && <p className="section-intro">{section.intro}</p>}
      {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
      {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
      {section.steps && <ol className="steps">{section.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>}
      {section.table && <div className="table-wrap"><table><thead><tr>{section.table.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row.join("|")}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
      {section.note && <aside className="note"><strong>Tip</strong>{section.note}</aside>}
    </section>
  );
}

function Achievements() {
  return (
    <section className="reference-section" aria-labelledby="achievement-list">
      <h2 id="achievement-list">Official 50-achievement checklist</h2>
      {achievementGroups.map((group) => <div className="reference-group" key={group.title}><h3>{group.title}</h3><div className="achievement-grid">{group.items.map(([name, description]) => <article className="achievement" key={name}><span aria-hidden="true">✓</span><div><strong>{name}</strong><p>{description}</p></div></article>)}</div></div>)}
    </section>
  );
}

function Devices() {
  return (
    <section className="reference-section" aria-labelledby="device-list">
      <h2 id="device-list">29-device competition reference</h2>
      <div className="device-groups">{deviceGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><span aria-hidden="true">◆</span>{item}</li>)}</ul></article>)}</div>
    </section>
  );
}

function FAQs({ items }: { items: NonNullable<PageRecord["faq"]> }) {
  return <section className="faq-list" aria-labelledby="faq-list"><h2 id="faq-list">Frequently asked questions</h2>{items.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>;
}

function Sources({ page }: { page: PageRecord }) {
  if (!page.sources?.length) return null;
  return <section className="sources"><h2>Sources</h2><p>Last checked {UPDATED}. Game behavior can change after an update, so use the linked Steam pages for the newest information.</p><ul>{page.sources.map((source) => <li key={source.url}><span className={`source-kind ${source.kind}`}>{source.kind}</span><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></section>;
}

function Related({ links }: { links?: PageRecord["related"] }) {
  if (!links?.length) return null;
  return <section className="related"><div className="section-kicker">Next on the bench</div><h2>Related tasks</h2><div className="related-grid">{links.map((link) => <Link key={link.href} href={link.href}><strong>{link.title}</strong><span>{link.description}</span><i aria-hidden="true">↗</i></Link>)}</div></section>;
}

export function ContentRenderer({ page }: { page: PageRecord }) {
  const home = page.path === "/";
  const legal = ["/privacy/", "/terms/", "/cookies/", "/disclaimer/"].includes(page.path);
  return (
    <>
      <div className={`hero ${home ? "home-hero" : ""} ${legal ? "legal-hero" : ""}`}>
        <div className="hero-inner">
          <div className="hero-copy">
            {!home && <Breadcrumbs path={page.path} title={page.title} />}
            <div className="eyebrow"><span />{page.eyebrow}</div>
            <h1>{page.title}</h1>
            <p className="answer">{page.answer}</p>
            <div className="status-row"><span className="status-chip">Updated {UPDATED}</span>{page.spoiler && <span className="status-chip spoiler-chip">Spoilers</span>}</div>
            {home && <div className="hero-actions"><Link className="button primary-button" href="/guides/">Open guide desk</Link><Link className="button ghost-button" href="/achievements/">Track achievements</Link></div>}
          </div>
          {!legal && <HeroMedia path={page.path} home={home} />}
        </div>
      </div>
      <div className={`page-grid ${legal ? "legal-grid" : ""}`}>
        <article className="article-card">
          {home && <div className="bench-label"><span>Popular guides</span><i>Pick your next task</i></div>}
          {page.sections.map((section) => <Section key={section.title} section={section} />)}
          {home && <GameGallery />}
          {page.path === "/achievements/" && <Achievements />}
          {(page.path === "/devices/" || page.path === "/guides/legend-of-akiba/") && <Devices />}
          {page.faq && <FAQs items={page.faq} />}
          <Sources page={page} />
        </article>
        {!legal && <aside className="side-rail">
          <div className="rail-card"><span className="rail-label">Quick start</span><strong>New to the shop?</strong><p>Learn the repair loop, spending priorities and the first progression checks.</p><Link href="/guides/beginners/">Open the beginner guide ↗</Link></div>
          <div className="rail-card warning-card"><span className="rail-label">Need a fix?</span><strong>Something is stuck?</strong><p>Work through cleaning, progress, save, controller and performance checks.</p><Link href="/guides/troubleshooting/">Open troubleshooting ↗</Link></div>
        </aside>}
      </div>
      <Related links={page.related} />
    </>
  );
}
