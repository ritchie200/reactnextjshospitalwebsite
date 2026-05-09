import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { doctors, getDoctorBySlug } from "@/data/doctors";

type DoctorProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug
  }));
}

export async function generateMetadata({
  params
}: DoctorProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found"
    };
  }

  return {
    title: doctor.name,
    description: `${doctor.name} is a fictional ${doctor.role} in the ${doctor.departmentName} department.`
  };
}

export default async function DoctorProfilePage({ params }: DoctorProfilePageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={doctor.departmentName}
        title={doctor.name}
        description={doctor.summary}
      />

      <section className="section">
        <div className="container profile-layout">
          <aside className="profile-panel">
            <div className="doctor-avatar doctor-avatar-large" aria-hidden="true">
              {doctor.name
                .replace("Dr. ", "")
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
            <h2>{doctor.role}</h2>
            <dl>
              <div>
                <dt>Department</dt>
                <dd>{doctor.departmentName}</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>{doctor.yearsExperience}+ years</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>{doctor.availability}</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>{doctor.languages.join(", ")}</dd>
              </div>
            </dl>
            <Link className="button button-primary" href="/appointment">
              Request appointment
            </Link>
          </aside>

          <div className="profile-content">
            <section>
              <h2>Profile</h2>
              <p>{doctor.bio}</p>
            </section>
            <section>
              <h2>Focus areas</h2>
              <ul className="tag-list">
                {doctor.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Education</h2>
              <ul className="check-list">
                {doctor.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
