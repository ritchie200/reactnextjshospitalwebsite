import Link from "next/link";
import type { Department } from "@/types";

type DepartmentCardProps = {
  department: Department;
};

export function DepartmentCard({ department }: DepartmentCardProps) {
  return (
    <article className="department-card">
      <div className="department-code" aria-hidden="true">
        {department.shortName}
      </div>
      <h3>{department.name}</h3>
      <p>{department.summary}</p>
      <ul>
        {department.services.slice(0, 3).map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <Link href={`/departments#${department.slug}`}>View department</Link>
    </article>
  );
}
