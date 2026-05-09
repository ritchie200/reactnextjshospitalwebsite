"use client";

import { useMemo, useState } from "react";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";

type DoctorFiltersProps = {
  initialDepartment?: string;
};

export function DoctorFilters({ initialDepartment = "all" }: DoctorFiltersProps) {
  const [department, setDepartment] = useState(initialDepartment);
  const [query, setQuery] = useState("");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesDepartment = department === "all" || doctor.departmentSlug === department;
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        doctor.name.toLowerCase().includes(normalizedQuery) ||
        doctor.role.toLowerCase().includes(normalizedQuery) ||
        doctor.focusAreas.some((area) => area.toLowerCase().includes(normalizedQuery));

      return matchesDepartment && matchesQuery;
    });
  }, [department, query]);

  return (
    <div className="doctor-browser">
      <div className="filter-panel" aria-label="Doctor filters">
        <label>
          Department
          <select value={department} onChange={(event) => setDepartment(event.target.value)}>
            <option value="all">All departments</option>
            {departments.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Search
          <input
            type="search"
            value={query}
            placeholder="Doctor, role, or focus area"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      <div className="doctor-grid" aria-live="polite">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor} />)
        ) : (
          <div className="empty-state">
            <h2>No doctors found</h2>
            <p>Try a different department or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
