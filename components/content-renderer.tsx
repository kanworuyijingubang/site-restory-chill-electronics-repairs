import Link from "next/link";
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

function WorkbenchArt() {
  return (
    <div className="workbench-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="device-shell"><span className="screen"><i /><i /><i /></span><span className="dial" /><span className="port" /></div>
      <div className="screwdriver"><span /><i /></div>
      <div className="wire wire-a" /><div className="wire wire-b" />
      <span className="screw s1">×</span><span className="screw s2">×</span><span className="screw s3">×</span>
    </div>
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
      {section.note && <aside className="note"><strong>Evidence note</strong>{section.note}</aside>}
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
  return <section className="sources"><h2>Sources & update boundary</h2><p>Checked {UPDATED}. Community mechanics are release-week observations and may change after patches.</p><ul>{page.sources.map((source) => <li key={source.url}><span className={`source-kind ${source.kind}`}>{source.kind}</span><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul></section>;
}

function Related({ links }: { links?: PageRecord["related"] }) {
  if (!links?.length) return null;
  return <section className="related"><div className="section-kicker">Next on the bench</div><h2>Related tasks</h2><div className="related-grid">{links.map((link) => <Link key={link.href} href={link.href}><strong>{link.title}</strong><span>{link.description}</span><i aria-hidden="true">↗</i></Link>)}</div></section>;
}

export function ContentRenderer({ page }: { page: PageRecord }) {
  const home = page.path === "/";
  return (
    <>
      <div className={`hero ${home ? "home-hero" : ""}`}>
        <div className="hero-inner">
          <div className="hero-copy">
            {!home && <Breadcrumbs path={page.path} title={page.title} />}
            <div className="eyebrow"><span />{page.eyebrow}</div>
            <h1>{page.title}</h1>
            <p className="answer">{page.answer}</p>
            <div className="status-row"><span className="status-chip">Updated {UPDATED}</span><span className="status-chip evidence-chip">{page.evidence}</span>{page.spoiler && <span className="status-chip spoiler-chip">Spoilers</span>}</div>
            {home && <div className="hero-actions"><Link className="button primary-button" href="/guides/">Open guide desk</Link><Link className="button ghost-button" href="/achievements/">Track achievements</Link></div>}
          </div>
          <WorkbenchArt />
        </div>
      </div>
      <div className="page-grid">
        <article className="article-card">
          {home && <div className="bench-label"><span>REPAIR QUEUE</span><i>12 verified routes</i></div>}
          {page.sections.map((section) => <Section key={section.title} section={section} />)}
          {page.path === "/achievements/" && <Achievements />}
          {(page.path === "/devices/" || page.path === "/guides/legend-of-akiba/") && <Devices />}
          {page.faq && <FAQs items={page.faq} />}
          <Sources page={page} />
        </article>
        <aside className="side-rail">
          <div className="rail-card"><span className="rail-label">SOURCE CODE</span><strong>Official first.</strong><p>Steam confirms facts. Current player evidence is labeled and dated.</p><Link href="/about/">How we verify ↗</Link></div>
          <div className="rail-card warning-card"><span className="rail-label">BOUNDARY</span><strong>No invented answers.</strong><p>Unsupported ports, codes, ending counts and stale prices stay out.</p></div>
        </aside>
      </div>
      <Related links={page.related} />
    </>
  );
}
