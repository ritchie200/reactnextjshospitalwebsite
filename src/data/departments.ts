import type { Department } from "@/types";

export const departments: Department[] = [
  {
    slug: "cardiology",
    name: "Cardiology",
    shortName: "CD",
    summary: "Preventive heart care, diagnostics, and long-term condition support.",
    description:
      "The cardiology team supports patients with risk reviews, rhythm concerns, chest pain assessment, and follow-up plans after cardiac procedures.",
    services: ["ECG review", "Blood pressure clinics", "Heart health checks", "Medication reviews"],
    highlights: ["Same-week outpatient appointments", "Integrated diagnostics", "Clear follow-up planning"]
  },
  {
    slug: "neurology",
    name: "Neurology",
    shortName: "NE",
    summary: "Consultations for headaches, nerve symptoms, seizures, and memory concerns.",
    description:
      "Neurology clinics focus on careful history-taking, targeted testing, and practical care plans for common and complex neurological symptoms.",
    services: ["Headache clinics", "Nerve conduction referrals", "Seizure follow-up", "Memory screening"],
    highlights: ["Detailed consultation notes", "Referral coordination", "Family education support"]
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    shortName: "PD",
    summary: "Routine child health visits, acute illness review, and vaccination guidance.",
    description:
      "Pediatric services cover newborn checks, growth monitoring, school-age health concerns, and parent-friendly guidance for everyday care.",
    services: ["Child health checks", "Vaccination advice", "Growth monitoring", "Asthma reviews"],
    highlights: ["Child-friendly appointment flow", "Parent education", "Preventive care focus"]
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    shortName: "OR",
    summary: "Care for joint pain, sports injuries, fractures, and mobility concerns.",
    description:
      "Orthopedic clinics help patients understand injury patterns, imaging needs, treatment choices, and recovery timelines.",
    services: ["Joint pain review", "Sports injury clinics", "Fracture follow-up", "Rehabilitation planning"],
    highlights: ["Imaging referrals", "Physiotherapy coordination", "Return-to-activity planning"]
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    shortName: "DX",
    summary: "Lab testing, imaging coordination, screening packages, and reports.",
    description:
      "Diagnostics connects outpatient visits with common investigations and helps patients receive readable results and next-step guidance.",
    services: ["Blood tests", "Ultrasound referrals", "Health screening", "Report collection"],
    highlights: ["Centralized reporting", "Early morning slots", "Doctor-reviewed results"]
  },
  {
    slug: "family-medicine",
    name: "Family Medicine",
    shortName: "FM",
    summary: "First-contact care for adults, seniors, and ongoing health needs.",
    description:
      "Family medicine provides everyday care, preventive screening, medication reviews, and referrals when specialist input is needed.",
    services: ["General consultations", "Annual checkups", "Chronic care reviews", "Travel health advice"],
    highlights: ["Continuity of care", "Practical treatment plans", "Specialist referral support"]
  }
];

export const getDepartmentBySlug = (slug: string) =>
  departments.find((department) => department.slug === slug);
