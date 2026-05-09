import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Outpatient Consultations",
    summary: "Scheduled visits for general and specialist care across the main departments.",
    items: ["First consultations", "Follow-up visits", "Medication reviews", "Referral planning"]
  },
  {
    title: "Emergency Assessment",
    summary: "Initial assessment and stabilization for urgent but non-trauma presentations.",
    items: ["24-hour phone line", "Triage desk", "Observation bays", "Specialist escalation"]
  },
  {
    title: "Preventive Health Checks",
    summary: "Age-appropriate screening plans with readable reports and doctor review.",
    items: ["Annual checkups", "Heart-risk screening", "Diabetes screening", "Lifestyle review"]
  },
  {
    title: "Diagnostics Coordination",
    summary: "Lab tests, imaging referrals, and result review connected to outpatient care.",
    items: ["Blood tests", "ECG", "Ultrasound referrals", "Report review"]
  },
  {
    title: "Rehabilitation Planning",
    summary: "Care plans for recovery after injury, illness, or orthopedic treatment.",
    items: ["Physiotherapy referrals", "Mobility review", "Home exercise plans", "Progress checks"]
  },
  {
    title: "Patient Support Desk",
    summary: "Help with appointments, records requests, billing questions, and visit preparation.",
    items: ["Appointment help", "Insurance guidance", "Visit preparation", "Report pickup"]
  }
];
