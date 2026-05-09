import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DepartmentCard } from "@/components/DepartmentCard";
import { DoctorCard } from "@/components/DoctorCard";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore the fictional Luminara Health Centre website with departments, doctors, appointment forms, and patient information."
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          className="hero-image"
          src="/images/hospital-hero.png"
          alt="Fictional hospital care team standing in a modern clinic lobby"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Fictional hospital website</p>
          <h1>Luminara Health Centre</h1>
          <p>
            A clean hospital website demo with department pages, doctor profiles,
            appointment requests, contact forms, and a mock admin list.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/appointment">
              Book an appointment
            </Link>
            <Link className="button button-secondary" href="/doctors">
              Find a doctor
            </Link>
          </div>
        </div>
      </section>

      <EmergencyBanner />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Departments"
            title="Care areas built around common patient needs"
            description="The department content is local mock data, structured so the UI can scale like a real hospital website."
          />
          <div className="department-grid">
            {departments.slice(0, 4).map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-layout">
          <div>
            <SectionHeader
              eyebrow="Patient information"
              title="Prepare for a visit without digging through long pages"
              description="The layout keeps practical information close to appointment actions and department details."
            />
            <div className="info-list">
              <div>
                <strong>Before your visit</strong>
                <p>Bring current medication names, previous reports, and insurance details if relevant.</p>
              </div>
              <div>
                <strong>During check-in</strong>
                <p>The front desk confirms appointment details and directs visitors to the right clinic area.</p>
              </div>
              <div>
                <strong>After consultation</strong>
                <p>Follow-up steps are summarized with prescriptions, test requests, or referral notes.</p>
              </div>
            </div>
          </div>
          <aside className="hours-panel" aria-label="Opening hours">
            <p className="eyebrow">Opening hours</p>
            <h2>Clinic schedule</h2>
            <dl>
              <div>
                <dt>Monday - Friday</dt>
                <dd>8:00 AM - 8:00 PM</dd>
              </div>
              <div>
                <dt>Saturday</dt>
                <dd>8:00 AM - 5:00 PM</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>Emergency desk only</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Doctors"
            title="Meet the demo care team"
            description="Each profile has its own route, specialty details, availability, and appointment link."
          />
          <div className="doctor-grid">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Appointments</p>
            <h2>Request a demo appointment</h2>
            <p>
              The form validates common fields and displays a local confirmation. No data is sent to a server.
            </p>
          </div>
          <Link className="button button-light" href="/appointment">
            Open booking form
          </Link>
        </div>
      </section>
    </>
  );
}
