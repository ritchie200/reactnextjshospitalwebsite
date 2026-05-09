import Link from "next/link";
import type { Doctor } from "@/types";

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  const initials = doctor.name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="doctor-card">
      <div className="doctor-avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="doctor-card-body">
        <p className="doctor-department">{doctor.departmentName}</p>
        <h3>{doctor.name}</h3>
        <p className="doctor-role">{doctor.role}</p>
        <p>{doctor.summary}</p>
        <div className="doctor-meta">
          <span>{doctor.yearsExperience}+ years</span>
          <span>{doctor.languages.slice(0, 2).join(", ")}</span>
        </div>
      </div>
      <Link href={`/doctors/${doctor.slug}`}>View profile</Link>
    </article>
  );
}
