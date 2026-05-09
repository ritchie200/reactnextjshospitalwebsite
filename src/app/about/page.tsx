import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the fictional Luminara Health Centre and the structure of this hospital website demo."
};

const values = [
  {
    title: "Clear information",
    text: "Visitors can find departments, doctors, services, and contact details without unnecessary page depth."
  },
  {
    title: "Practical care flow",
    text: "Appointment actions stay close to doctor and department content so common tasks are easy to complete."
  },
  {
    title: "Responsible demo data",
    text: "The project uses fictional doctors and mock appointment records. It does not collect or store patient data."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A fictional hospital site with realistic public pages"
        description="Luminara Health Centre is a portfolio project, not a real clinic. The content is written to feel practical while keeping the data safe and fictional."
      />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeader
              eyebrow="Approach"
              title="Designed like a small hospital website"
              description="The project focuses on clean routing, reusable components, form validation, and static data that can later be replaced with an API."
            />
            <p className="lead-text">
              Public hospital websites need direct navigation, readable service descriptions,
              accessible forms, and responsive layouts. This project keeps those basics front and center.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <strong>8</strong>
              <span>Core pages</span>
            </div>
            <div className="stat-card">
              <strong>6</strong>
              <span>Departments</span>
            </div>
            <div className="stat-card">
              <strong>6</strong>
              <span>Doctor profiles</span>
            </div>
            <div className="stat-card">
              <strong>0</strong>
              <span>Real records</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Principles"
            title="What the interface prioritizes"
            description="The content and layout are intentionally restrained so the site feels useful rather than decorative."
          />
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
