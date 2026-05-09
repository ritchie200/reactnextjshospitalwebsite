import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Request a fictional appointment through a validated demo form. No real patient data is collected."
};

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Request a demo appointment"
        description="This form demonstrates validation and local UI feedback. It does not connect to a database or send real patient information."
      />
      <section className="section">
        <div className="container form-layout">
          <div>
            <h2>Before you submit</h2>
            <p>
              Use fictional details only. The form validates contact details, department,
              doctor, preferred date, preferred time, and a short visit reason.
            </p>
            <ul className="check-list">
              <li>No backend is connected.</li>
              <li>No real patient data should be entered.</li>
              <li>Successful submission displays a local confirmation message.</li>
            </ul>
          </div>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
