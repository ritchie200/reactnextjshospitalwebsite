import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Browse fictional hospital departments including cardiology, neurology, pediatrics, orthopedics, diagnostics, and family medicine."
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Departments"
        title="Departments and clinical focus areas"
        description="Each department card uses local mock data and links visitors toward doctors or appointment booking."
      />

      <section className="section">
        <div className="container department-list">
          {departments.map((department) => (
            <article className="department-detail" id={department.slug} key={department.slug}>
              <div className="department-code" aria-hidden="true">
                {department.shortName}
              </div>
              <div>
                <h2>{department.name}</h2>
                <p>{department.description}</p>
                <div className="detail-columns">
                  <div>
                    <h3>Services</h3>
                    <ul className="check-list">
                      {department.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Highlights</h3>
                    <ul className="check-list">
                      {department.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="inline-actions">
                  <Link className="button button-primary" href={`/doctors?department=${department.slug}`}>
                    View doctors
                  </Link>
                  <Link className="button button-secondary" href="/appointment">
                    Book visit
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
