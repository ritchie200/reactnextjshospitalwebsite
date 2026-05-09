import Link from "next/link";

const quickLinks = [
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/appointment", label: "Appointments" },
  { href: "/admin/appointments", label: "Demo Admin" }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            Luminara Health Centre
          </Link>
          <p>
            A fictional hospital website built for a frontend portfolio. All doctor,
            department, and appointment content is mock data.
          </p>
        </div>

        <div>
          <h2>Useful Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Opening Hours</h2>
          <ul className="footer-hours">
            <li>
              <span>Mon - Fri</span>
              <strong>8:00 AM - 8:00 PM</strong>
            </li>
            <li>
              <span>Saturday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </li>
            <li>
              <span>Sunday</span>
              <strong>Emergency desk only</strong>
            </li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <address>
            42 Sunrise Avenue
            <br />
            Fictional City, FC 410002
            <br />
            <a href="tel:+18005550137">+1 800 555 0137</a>
            <br />
            <a href="mailto:hello@luminarahealth.example">hello@luminarahealth.example</a>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Copyright 2026 Ritchie Fernandes. MIT licensed.</p>
      </div>
    </footer>
  );
}
