import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the fictional Luminara Health Centre through a demo contact form with basic validation."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact the front desk"
        description="Use the validated demo form for general questions. The address, email, and phone details are fictional."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <h2>Visit information</h2>
            <address>
              42 Sunrise Avenue
              <br />
              Fictional City, FC 410002
              <br />
              <a href="tel:+18005550137">+1 800 555 0137</a>
              <br />
              <a href="mailto:hello@luminarahealth.example">hello@luminarahealth.example</a>
            </address>
            <div className="mini-map" aria-label="Decorative map placeholder">
              <span>Fictional City Clinic District</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
