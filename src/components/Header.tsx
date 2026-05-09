"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            LH
          </span>
          <span>
            <strong>Luminara</strong>
            <small>Health Centre</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`nav-links ${isOpen ? "nav-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={isActive(item.href) ? "active" : ""}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/appointment" onClick={() => setIsOpen(false)}>
            Book Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
