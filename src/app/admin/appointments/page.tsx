import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { appointmentRequests } from "@/data/appointments";

export const metadata: Metadata = {
  title: "Demo Appointment List",
  description:
    "Admin-style appointment list page using static fictional appointment requests for portfolio demonstration."
};

export default function AdminAppointmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Demo admin"
        title="Appointment request list"
        description="This page uses static mock records only. It is included to show table layout, status styles, and admin-style UI without a backend."
      />

      <section className="section">
        <div className="container">
          <div className="admin-note">
            <strong>Demo only:</strong> all rows are fictional and safe for a public repository.
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <caption>Static appointment requests</caption>
              <thead>
                <tr>
                  <th scope="col">Request</th>
                  <th scope="col">Visitor</th>
                  <th scope="col">Department</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Preferred slot</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointmentRequests.map((request) => (
                  <tr key={request.id}>
                    <td data-label="Request">
                      <strong>{request.id}</strong>
                      <span>{request.submittedAt}</span>
                    </td>
                    <td data-label="Visitor">{request.patientLabel}</td>
                    <td data-label="Department">{request.department}</td>
                    <td data-label="Doctor">{request.doctor}</td>
                    <td data-label="Preferred slot">
                      {request.requestedDate}
                      <span>{request.requestedTime}</span>
                    </td>
                    <td data-label="Reason">{request.reason}</td>
                    <td data-label="Status">
                      <span className={`status-pill status-${request.status.toLowerCase()}`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
