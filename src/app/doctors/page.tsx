import type { Metadata } from "next";
import { DoctorFilters } from "@/components/DoctorFilters";
import { PageHeader } from "@/components/PageHeader";
import { departments } from "@/data/departments";

export const metadata: Metadata = {
  title: "Doctors",
  description:
    "Find fictional doctors by department, role, and focus area in the Luminara Health Centre website demo."
};

type DoctorsPageProps = {
  searchParams?: Promise<{
    department?: string;
  }>;
};

export default async function DoctorsPage({ searchParams }: DoctorsPageProps) {
  const params = await searchParams;
  const requestedDepartment = params?.department ?? "all";
  const initialDepartment = departments.some(
    (department) => department.slug === requestedDepartment
  )
    ? requestedDepartment
    : "all";

  return (
    <>
      <PageHeader
        eyebrow="Doctors"
        title="Find a doctor by department"
        description="Filter the mock doctor list by department or search by name, role, and focus area."
      />
      <section className="section">
        <div className="container">
          <DoctorFilters initialDepartment={initialDepartment} />
        </div>
      </section>
    </>
  );
}
