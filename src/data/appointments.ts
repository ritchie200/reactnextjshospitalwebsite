import type { AppointmentRequest } from "@/types";

export const appointmentRequests: AppointmentRequest[] = [
  {
    id: "APT-1001",
    patientLabel: "Demo Visitor A",
    department: "Cardiology",
    doctor: "Dr. Maya Iyer",
    requestedDate: "2026-05-14",
    requestedTime: "10:30 AM",
    reason: "Blood pressure review and discussion of recent screening results.",
    status: "New",
    submittedAt: "2026-05-08 09:42"
  },
  {
    id: "APT-1002",
    patientLabel: "Demo Visitor B",
    department: "Pediatrics",
    doctor: "Dr. Nisha Fernandes",
    requestedDate: "2026-05-15",
    requestedTime: "12:00 PM",
    reason: "Routine child wellness visit and vaccination questions.",
    status: "Scheduled",
    submittedAt: "2026-05-08 11:10"
  },
  {
    id: "APT-1003",
    patientLabel: "Demo Visitor C",
    department: "Orthopedics",
    doctor: "Dr. Samuel D'Souza",
    requestedDate: "2026-05-16",
    requestedTime: "3:15 PM",
    reason: "Knee pain after recreational sports activity.",
    status: "Reviewed",
    submittedAt: "2026-05-08 13:25"
  },
  {
    id: "APT-1004",
    patientLabel: "Demo Visitor D",
    department: "Family Medicine",
    doctor: "Dr. Leah Thomas",
    requestedDate: "2026-05-17",
    requestedTime: "9:00 AM",
    reason: "Annual health check and medication review.",
    status: "Follow-up",
    submittedAt: "2026-05-08 16:08"
  },
  {
    id: "APT-1005",
    patientLabel: "Demo Visitor E",
    department: "Neurology",
    doctor: "Dr. Arjun Menon",
    requestedDate: "2026-05-18",
    requestedTime: "10:00 AM",
    reason: "Recurring headaches and review of symptom diary.",
    status: "New",
    submittedAt: "2026-05-09 08:15"
  }
];
