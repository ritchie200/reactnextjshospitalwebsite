export type Department = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  services: string[];
  highlights: string[];
};

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  departmentSlug: string;
  departmentName: string;
  summary: string;
  bio: string;
  education: string[];
  focusAreas: string[];
  availability: string;
  languages: string[];
  yearsExperience: number;
};

export type AppointmentRequest = {
  id: string;
  patientLabel: string;
  department: string;
  doctor: string;
  requestedDate: string;
  requestedTime: string;
  reason: string;
  status: "New" | "Reviewed" | "Scheduled" | "Follow-up";
  submittedAt: string;
};

export type Service = {
  title: string;
  summary: string;
  items: string[];
};
