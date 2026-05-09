import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page may have moved or the route does not exist in this demo.</p>
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
