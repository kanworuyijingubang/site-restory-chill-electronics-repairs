import Link from "next/link";

export default function NotFound() {
return <div className="not-found"><div className="error-code">404</div><h1>That part is not on the bench.</h1><p>The page may have moved or may no longer be available.</p><Link className="button primary-button" href="/guides/">Browse ReStory guides</Link></div>;
}
