import Link from "next/link";

export function EmergencyBanner() {
  return (
    <section className="emergency-banner" aria-label="Emergency contact">
      <div className="container emergency-inner">
        <div>
          <strong>Emergency support</strong>
          <span>For urgent concerns, call the desk before visiting.</span>
        </div>
        <div className="emergency-actions">
          <a href="tel:+18005550137">+1 800 555 0137</a>
          <Link href="/appointment">Request appointment</Link>
        </div>
      </div>
    </section>
  );
}
