import Link from "next/link";

export default function NotFound() {
  return <div className="not-found"><div className="error-code">404</div><h1>That part is not on the bench.</h1><p>The page may have moved, or the guide has not passed its evidence gate.</p><Link className="button primary-button" href="/guides/">Browse verified guides</Link></div>;
}
