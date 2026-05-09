import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Review fictional outpatient, emergency assessment, diagnostics, preventive care, and patient support services."
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Hospital services for common visit types"
        description="Services are grouped around the information a visitor would usually check before contacting a clinic."
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Available services"
            description="The service content is static and intentionally simple so the component structure stays clear."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <ul className="check-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Need a department-specific visit?</h2>
            <p>Choose a doctor or send an appointment request from the demo booking page.</p>
          </div>
          <Link className="button button-light" href="/appointment">
            Book visit
          </Link>
        </div>
      </section>
    </>
  );
}
