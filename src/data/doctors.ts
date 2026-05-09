import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    slug: "maya-iyer",
    name: "Dr. Maya Iyer",
    role: "Consultant Cardiologist",
    departmentSlug: "cardiology",
    departmentName: "Cardiology",
    summary: "Focuses on preventive cardiology, hypertension care, and outpatient heart-risk reviews.",
    bio:
      "Dr. Maya Iyer works with adults who need practical guidance on heart-risk factors, medication plans, and follow-up after abnormal screening results.",
    education: ["MD, Internal Medicine", "DM, Cardiology"],
    focusAreas: ["Preventive cardiology", "Hypertension", "Palpitations", "Lifestyle risk reduction"],
    availability: "Mon, Wed, Fri - 10:00 AM to 2:00 PM",
    languages: ["English", "Hindi", "Malayalam"],
    yearsExperience: 12
  },
  {
    slug: "arjun-menon",
    name: "Dr. Arjun Menon",
    role: "Neurology Specialist",
    departmentSlug: "neurology",
    departmentName: "Neurology",
    summary: "Supports patients with headaches, nerve symptoms, seizure reviews, and memory concerns.",
    bio:
      "Dr. Arjun Menon combines detailed neurological exams with clear explanations, helping patients understand when testing is useful and what to monitor next.",
    education: ["MD, General Medicine", "DM, Neurology"],
    focusAreas: ["Headache medicine", "Peripheral neuropathy", "Seizure follow-up", "Memory screening"],
    availability: "Tue, Thu, Sat - 9:30 AM to 1:30 PM",
    languages: ["English", "Hindi", "Tamil"],
    yearsExperience: 10
  },
  {
    slug: "nisha-fernandes",
    name: "Dr. Nisha Fernandes",
    role: "Pediatric Consultant",
    departmentSlug: "pediatrics",
    departmentName: "Pediatrics",
    summary: "Provides routine child health checks, growth reviews, and parent education.",
    bio:
      "Dr. Nisha Fernandes works with families on common childhood illnesses, asthma follow-up, nutrition questions, and preventive pediatric visits.",
    education: ["MBBS", "DCH, Pediatrics"],
    focusAreas: ["Child wellness", "Asthma reviews", "Vaccination guidance", "Growth monitoring"],
    availability: "Mon to Thu - 11:00 AM to 4:00 PM",
    languages: ["English", "Konkani", "Hindi"],
    yearsExperience: 9
  },
  {
    slug: "samuel-dsouza",
    name: "Dr. Samuel D'Souza",
    role: "Orthopedic Surgeon",
    departmentSlug: "orthopedics",
    departmentName: "Orthopedics",
    summary: "Treats joint pain, sports injuries, fracture follow-up, and mobility concerns.",
    bio:
      "Dr. Samuel D'Souza helps patients weigh conservative care, imaging, physiotherapy, and surgical options for orthopedic conditions.",
    education: ["MS, Orthopedics", "Fellowship in Sports Injury Care"],
    focusAreas: ["Knee pain", "Sports injuries", "Fracture care", "Shoulder mobility"],
    availability: "Mon, Tue, Fri - 2:00 PM to 6:00 PM",
    languages: ["English", "Hindi", "Marathi"],
    yearsExperience: 14
  },
  {
    slug: "leah-thomas",
    name: "Dr. Leah Thomas",
    role: "Family Physician",
    departmentSlug: "family-medicine",
    departmentName: "Family Medicine",
    summary: "Handles general consultations, chronic care reviews, and preventive screening.",
    bio:
      "Dr. Leah Thomas provides first-contact care for adults and seniors, with attention to continuity, medication safety, and useful referrals.",
    education: ["MBBS", "DNB, Family Medicine"],
    focusAreas: ["Adult primary care", "Diabetes reviews", "Preventive screening", "Medication reviews"],
    availability: "Mon to Sat - 8:30 AM to 12:30 PM",
    languages: ["English", "Hindi"],
    yearsExperience: 11
  },
  {
    slug: "kabir-rao",
    name: "Dr. Kabir Rao",
    role: "Diagnostic Medicine Lead",
    departmentSlug: "diagnostics",
    departmentName: "Diagnostics",
    summary: "Reviews screening results and coordinates lab and imaging follow-up.",
    bio:
      "Dr. Kabir Rao focuses on making test results understandable and helping patients know which findings need follow-up.",
    education: ["MD, Pathology", "Fellowship in Clinical Diagnostics"],
    focusAreas: ["Health screening", "Lab interpretation", "Imaging coordination", "Preventive reports"],
    availability: "Tue to Sat - 10:00 AM to 3:00 PM",
    languages: ["English", "Hindi", "Kannada"],
    yearsExperience: 8
  }
];

export const getDoctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug);
